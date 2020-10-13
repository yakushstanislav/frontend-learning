"use strict";

async function wait(ms)
{
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

console.log("Call wait() start...");
wait(2000).then(() => console.log("Time elapsed!"));
console.log("Call wait() stop...");