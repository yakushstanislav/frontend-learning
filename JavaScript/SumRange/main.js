"use strict";

function sum(numbers)
{
    let result = 0;

    for (let number of numbers)
    {
        result += number;
    }

    return result;
}

function range(from, to, step=1)
{
    let result = [];

    for (let i = from; i <= to; i += step)
    {
        result.push(i);
    }

    return result;
}

console.log(sum(range(1, 10)));