"use strict";

async function wait(ms, callback)
{
    await new Promise(resolve => {
        setTimeout(() => {
            callback();
            resolve();
        }, ms);
    });
}

console.log("Call wait() start...");
wait(2000, () => console.log("Time elapsed!"));
console.log("Call wait() stop...");