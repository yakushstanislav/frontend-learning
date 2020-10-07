"use strict";

function multiple(...numbers)
{
    let result = 0;

    for (let n of numbers)
        result += n;

    return result;
}

function print([a, b, c])
{
    console.log(a, b, c);
}

print([1, 2, 3, 4, 5]);

console.log(multiple(1, 2, 3, 4, 5, 7, 8, 9, 10));