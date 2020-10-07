"use strict";

function countChar(x, c)
{
    if (c == undefined)
        return null;

    let n = 0;

    for (let i = 0; i < x.length; i++)
    {
        if (x[i] == c)
            n++;
    }

    return n;
}

function countBs(x)
{
    return countChar(x, 'B');
}

console.log(countBs("Hubba Bubba"));
console.log(countChar("Hello! How are you? What is you name, Bro?", "a"));