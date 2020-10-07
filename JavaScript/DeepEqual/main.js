"use strict";

const obj1 = {
    a: 1,
    c: "ThisIsAString",
    v: false,
    z: null,
    data: {
        a: null,
        name: "SY",
        num: 2,
    }
};

const obj2 = {
    a: 1,
    c: "ThisIsAString",
    v: false,
    z: null,
    data: {
        a: null,
        name: "SY",
        num: 2,
    }
};

const obj3 = {
    a: 1,
    c: "ThisIsAStringx",
    v: false,
    z: null,
    data: {
        a: null,
        name: "SY",
        num: 2,
    }
};

const obj4 = {
    a: 1,
    c: "ThisIsAString",
    v: false,
    y: null,
    data: {
        a: null,
        name: "SY",
        num: 2,
    }
};

function DeepEqual(obj1, obj2)
{
    for (let key of Object.keys(obj1))
    {
        if (typeof obj1[key] !== typeof obj2[key])
        {
            return false;
        }

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object')
        {
            if (obj1[key] != null && obj2[key] != null)
                return DeepEqual(obj1[key], obj2[key]);
        }
        else if (obj1[key] !== obj2[key])
        {
            return false;
        }
    }

    return true;
}

console.log(DeepEqual(obj1, obj2));
console.log(DeepEqual(obj1, obj3));
console.log(DeepEqual(obj1, obj4));
console.log(DeepEqual(obj2, obj3));
console.log(DeepEqual(obj2, obj4));
console.log(DeepEqual(obj3, obj4));