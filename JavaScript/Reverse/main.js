"use strict";

function reverse(array)
{
    let result = [];

    for (let i = array.length - 1; i >= 0; i--)
    {
        result.push(array[i]);
    }

    return result;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverse(array));