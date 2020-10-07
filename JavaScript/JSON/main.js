"use strict";

let object = {
    name: "Stanislav Yakush",
    age: 28,
    email: "st.yakush@yandex.ru",
    car: "Audi A6 C7"
};

let json = JSON.stringify(object);
console.log(json);
console.log(JSON.parse(json));