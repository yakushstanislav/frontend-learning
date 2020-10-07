"use strict";

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};

function listToArray(list)
{
    let array = [];
    let current = list;

    if (!current)
        return result;

    while (current != null)
    {
        array.push(current.value);

        current = current.next;
    }

    return array;
}

function prepend(value, list)
{
    return {value: value, next: list};
}

function nth(list, index)
{
    let current = list;
    let i = 0;

    while (current != null)
    {
        if (i++ == index)
        {
            return current.value;
        }

        current = current.next;
    }

    return null;
}

function nth2(list, index)
{
    if (!list)
        return null;

    if (index)
        return nth2(list.next, index - 1);
    else
        return list.value;
}

console.log(listToArray(list));

list = prepend(100, list);
list = prepend(200, list);
list = prepend(300, list);

console.log(listToArray(list));

console.log("--- NTH");
console.log(nth(list, 0));
console.log(nth(list, 2));
console.log(nth(list, 4));

console.log("--- NTH2");
console.log(nth2(list, 0));
console.log(nth2(list, 2));
console.log(nth2(list, 4));