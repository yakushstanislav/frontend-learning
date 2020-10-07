"use strict";

function SayHi(name="Stanislav")
{
    return `Hi ${name}`;
}

function GenerateMultiple(x)
{
    return n => n*x;
}

console.log(SayHi());
console.log(SayHi("Victoria"));

let multiple10 = GenerateMultiple(10);
let multiple20 = GenerateMultiple(20);

console.log(multiple10(35));
console.log(multiple20(35));

console.log((x => 5 * x)(10));