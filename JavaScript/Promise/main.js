"use strict";

new Promise((resolve, _) => {
    setTimeout(() => resolve("Hello async JavaScript!"), 1000);
})
.then((value) => console.log(`Resolve value: ${value}`))
.catch((value) => console.log(`Reject value: ${value}`));