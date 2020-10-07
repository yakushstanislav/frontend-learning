"use strict";

let persons = [
    {
        name: "Stanislav Yakush",
        age: 28,
        sex: 'M',
        driver: true,
        languages: ['JS', 'Assembler', 'C', 'C++', 'Ruby', 'Python', 'Perl', 'Go', "Erlang"]
    },
    {
        name: "Vasily Pupkin",
        age: 24,
        sex: 'M',
        driver: false,
        languages: ['Ruby', 'Perl']
    },
    {
        name: "Marta Petrova",
        age: 25,
        sex: 'F',
        driver: true,
        languages: ['JS', 'PHP']
    }
];

console.log("Age >= 25:", persons.filter(x => x.age >= 25))
console.log("Avg age:", Math.round(persons.map(x => x.age).reduce((x, y) => x + y) / persons.length));

console.log("Some C++:", persons.some(val => val.languages.includes('C++')));
console.log("Some Brainfuck:", persons.some(val => val.languages.includes('Brainfuck')));