"use strict";

const http = require("http");
const url = require("url");
const chalk = require("chalk");

const SerialPort = require("serialport");
const SerialParserReadline = require("@serialport/parser-readline");

const SERIAL_PATH = "/dev/ttyACM0";
const SERIAL_BAUDRATE = 9600;

const port = new SerialPort(SERIAL_PATH, { baudRate: SERIAL_BAUDRATE });

const parser = new SerialParserReadline();

port.pipe(parser);

let state = {
    status: "WAIT"
};

parser.on("data", line => {
    if (line.indexOf("TEMP:") != -1)
    {
        console.log(chalk.blueBright(`Read data from device: ${line}`));

        state = {
            status: "OK",
            temperature: parseFloat(line.split(" ")[1]),
            timestamp: new Date().getTime()
        };
    } else {
        console.error(chalk.red(`Failed to parse data from device ${line}`));
    }
});

port.on("error", error =>
    console.error(chalk.red(`Handle error: ${error}`)
));

port.on("close", () =>
    console.warn(chalk.whiteBright("Close connection...")
));

http.createServer((request, response) => {
    if (request.url)
    {
        const path = url.parse(request.url);

        if (path.pathname == "/temperature")
        {
            const data = JSON.stringify(state);

            console.log(chalk.yellowBright(`Send response: ${data}`));

            response.writeHead(200, {'Content-Type': 'application/json',
                                     'Access-Control-Allow-Origin': '*'});
            response.write(data);
            response.end();
        }
        else
        {
            response.writeHead(404, {'Access-Control-Allow-Origin': '*'});
            response.write("Method is not supported.");
            response.end();
        }
    }
}).listen(8080);