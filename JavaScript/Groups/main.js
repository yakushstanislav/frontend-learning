"use strict";

class Group {
    constructor() {
        this._data = [];
    }

    add(value) {
        if (this._data.indexOf(value) == -1)
            this._data.push(value);
    }

    delete(value) {
        this._data = this._data.filter(x => x != value);
    }

    has(value) {
        return this._data.includes(value);
    }

    value(index) {
        if (index >= 0 && index < this._data.length)
            return this._data[index];

        return null;
    }

    length() {
        return this._data.length;
    }

    toString() {
        return this._data.join(", ");
    }
}

class GroupIterator {
    constructor(group) {
        this._group = group;
        this._pos = 0;
    }

    next() {
        if (this._pos < this._group.length())
            return {value: this._group.value(this._pos++), done: false};

        return {done: true};
    }
}

Group.prototype[Symbol.iterator] = function() {
    //return this.data()[Symbol.iterator]()
    return new GroupIterator(this);
}

let group1 = new Group();
group1.add(1);
group1.add(1);
group1.add(2);
group1.add(3);
group1.add(4);
group1.add(5);
group1.add(5);

console.log(String(group1));

console.log(group1.has(1));
console.log(group1.has(5));
console.log(group1.has(7));

group1.delete(1);
group1.delete(5);

for (let value of group1)
    console.log(`Value: ${value}`);

console.log(String(group1));