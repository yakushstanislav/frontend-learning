"use strict";

class Vector2D
{
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    plus(v) {
        this._x += v.x;
        this._y += v.y;
        return this;
    }

    minus(v) {
        this._x -= v.x;
        this._y -= v.y;
        return this;
    }

    length() {
        return Math.round(Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2)));
    }
}

Vector2D.prototype.toString = function() {
    return `${this.x} ${this.y}`;
};

let vector1 = new Vector2D(10, 10);
let vector2 = new Vector2D(50, 50);

console.log(String(vector1.plus(vector2)));
console.log(String(vector1));
console.log(vector1.length());

console.log(String(vector1.minus(vector2)));
console.log(String(vector1));
console.log(vector1.length());

console.log(String(vector1.plus(vector2)));
console.log(String(vector1));