"use strict";

let object = {
    name: "Stanislav Yakush",
    age: 28,
    sex: "M"
};

console.log(object);

object.car = "Audi A6";

console.log(object);

object.pets = ["Cat"];

console.log(object);

delete(object.pets);

console.log(object);