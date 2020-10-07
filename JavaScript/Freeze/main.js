"use strict";

let obj = Object.freeze({
    a: 1,
    b: 2,
    c: 3
});


console.log(obj);

/*
TypeError

obj.a = 2;
obj.b = 10;
obj.d = 100;
*/


console.log(obj);