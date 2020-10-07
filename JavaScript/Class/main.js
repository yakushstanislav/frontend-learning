"use strict";

class Location {
    constructor(country, city, address) {
        this._country = country;
        this._city = city;
        this._address = address;

        this._visited = false;
    }

    get country() {
        return this._country;
    }

    get city() {
        return this._city;
    }

    get address() {
        return this._address;
    }

    get visited() {
        return this._visited;
    }

    set visited(value) {
        this._visited = value;
    }
}

class SolarSystemLocation extends Location
{
    constructor(planet, country, city, address) {
        super(country, city, address);
        this._planet = planet;
    }

    get planet() {
        return this._planet;
    }
}

let class1 = new class {
    hello() {
        console.log("Hello!");
    }
}

class1.hello();

let location1 = new Location("BY", "Minsk", "Lopatina 15V");

console.log(location1.country);
console.log(location1.city);
console.log(location1.address);

console.log(location1.visited);

location1.visited = true;

console.log(location1.visited);

let location2 = new SolarSystemLocation("Earth", "BY", "Minsk", "Lopatina 15V");

console.log(location2.planet);
console.log(location2.country);
console.log(location2.city);
console.log(location2.address);

console.log(location2.visited);

location2.visited = true;

console.log(location2.visited);