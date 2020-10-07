"use strict";

// new RegExp()
const regexp = /(\d{1,2})-(\d{1,2})-(\d{4})/;

const [_, day, month, year] = regexp.exec("07-10-2020");

const dt = new Date(year, month - 1, day);

console.log(dt);