"use strict";

function loop(value, statement, update, body)
{
    while (statement(value))
    {
        body(value);
        value = update(value);
    }
}

loop(0, x => x < 10, x => x + 1, x => {
    console.log(`Hello World ${x}`);
})