"use strict";

let persons = [
    {
        name: "Stanislav Yakush",
        sex: 'M'
    },
    {
        name: 'Vasily Pupkin',
        sex: 'M',
    },
    {
        name: 'Marta Petrova',
        sex: 'F',
    }
];

function every(array, statement)
{
    for (let value of array)
    {
        if (!statement(value))
            return false;
    }

    return true;
}

function every2(array, statement)
{
    return !array.some(x => !statement(x));
}

console.log(every(persons, x => x.sex == 'M'));
console.log(every(persons.filter(x => x.sex == 'M'), x => x.sex == 'M'));

console.log(every2(persons, x => x.sex == 'M'));
console.log(every2(persons.filter(x => x.sex == 'M'), x => x.sex == 'M'));