"use strict";

function isEven(x)
{
    if (x == 0)
    {
        return true;
    }
    else if (x == 1)
    {
        return false;
    }
    else
    {
        return isEven(x - 2);
    }
}

console.log(isEven(0));
console.log(isEven(1));

for (let i = 50; i < 76; i++)
{
    console.log(`${i} is ${isEven(i)}`);
}