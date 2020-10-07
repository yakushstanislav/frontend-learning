"use strict";

function repeat(n, f)
{
    for (let i = 0; i < n; i++)
        f(i);
}

repeat(10, x => console.log(x));