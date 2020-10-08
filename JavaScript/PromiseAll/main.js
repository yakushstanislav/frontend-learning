"use strict";

const promise1 = new Promise((resolve, reject) => {
    resolve(1);
});

const promise2 = new Promise((resolve, reject) => {
    resolve(2);
});

const promise3 = new Promise((resolve, reject) => {
    reject(3);
});

Promise.all([promise1, promise2])
    .then(value => {
            console.log(`Value: ${value}`);
        },
        reason => {
            console.log(`Reason: ${reason}`);
        });

Promise.all([promise2, promise3])
    .then(value => {
            console.log(`Value: ${value}`);
        },
        reason => {
            console.log(`Reason: ${reason}`);
        });