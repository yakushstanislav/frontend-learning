"use strict";

let arrays = [1, 2,3, [5, 6, 7], [8, 9, 10]];

function makeFlat(array)
{
    return array.reduce((a, b) => {
        return a.concat(b);
    }, []);
}

console.log(makeFlat(arrays));