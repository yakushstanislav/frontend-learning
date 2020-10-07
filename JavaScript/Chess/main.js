"use strict";

const W = 8;
const H = 8;

for (let i = 0; i < H; i++)
{
    let buffer = "";

    for (let j = 0; j < W; j++)
    {
        buffer += ((i + j) % 2 == 0) ? " " : "#";
    }

    console.log(buffer);

    buffer = "";
}