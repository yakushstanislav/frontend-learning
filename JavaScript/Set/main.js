"use strict";

let set = new Set();

set.add(1);
set.add(1);
set.add(2);
set.add(3);

console.log(set);

console.log(set.has(1));
console.log(set.has(4));

set.delete(1);

console.log(set);