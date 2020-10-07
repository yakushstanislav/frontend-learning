"use strict";

class ValueError extends Error {}

function getLastElement(arr) {
    if (!(arr instanceof Array))
        throw new ValueError("Value is not array");

    if (arr.length == 0)
        throw new ValueError("Array length is 0");

    return arr[arr.length - 1];
}

const arr = [1, 2, 3, 4, 5];

console.log(getLastElement(arr));

try {
    getLastElement([]);
} catch (error) {
    console.log(`Exception: ${error.message}`);
} finally {
    console.log("Finally scope");
}

try {
    getLastElement(0);
} catch(error) {
    console.log(`Exception: ${error.message}`);
} finally {
    console.log("Finally scope");
}