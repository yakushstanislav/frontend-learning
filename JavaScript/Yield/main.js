"use strict";

function* range(a, b)
{
    for (let i = a; i < b; i++)
        yield i;
}

for (const value of range(10, 15))
{
    console.log(value);
}