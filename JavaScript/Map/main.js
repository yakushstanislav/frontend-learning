"use strict";

let map = new Map();

map.set("SY", 28);
map.set("VA", 23);

console.log(map);

console.log(map.get("SY"));
console.log(map.has("VA"));

console.log(map.has("SA"));

map.delete("SY");

console.log(map);