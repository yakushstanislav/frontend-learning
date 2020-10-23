"use strict";

const http = require("http");
const url = require("url");

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

parser.on('data', line => {
    if (line.indexOf("TEMP:") != -1)
        state = {
            status: "OK",
            temperature: parseFloat(line.split(" ")[1]),
            timestamp: new Date().getTime()
        };
});

http.createServer(function (request, response) {
    if (request.url)
    {
        let path = url.parse(request.url);

        if (path.pathname == "/temperature")
        {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(state));
            response.end();
        }
        else
        {
            response.writeHead(404);
            response.write("Method is not supported.");
            response.end();
        }
    }
}).listen(8080);