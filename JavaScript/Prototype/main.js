"use strict";

function SayHI(name)
{
    this.name = name;
}

SayHI.prototype.print = function() {
    console.log(`Hi ${this.name}`);
};

SayHI.prototype.toString = function() {
    return `Hi ${this.name}`;
};

let sayHi = new SayHI("Stanislav");

sayHi.print();

console.log(sayHi instanceof Object);
console.log(sayHi instanceof Array);
console.log(sayHi instanceof Function);

console.log(String(sayHi));