"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testFunction = exports.Person = void 0;
var Person = /** @class */ (function () {
    // constructor
    function Person(name, address, age, phone, email) {
        this._name = name;
        this._address = address;
        this._age = age;
        this._phone = phone;
        this._email = email;
    }
    Object.defineProperty(Person.prototype, "name", {
        // getters
        get: function () { return this._name; },
        // setters 
        set: function (name) { this._name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () { return this._address; },
        set: function (address) { this._address = address; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () { return this._age; },
        set: function (age) { this._age = age; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "phone", {
        get: function () { return this._phone; },
        set: function (phone) { this._phone = phone; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "email", {
        get: function () { return this._email; },
        set: function (email) { this._email = email; },
        enumerable: false,
        configurable: true
    });
    // facilitators
    Person.prototype.canVote = function () {
        if (this._age >= 18) {
            console.log(this._name + " is eligible for voting");
        }
        else {
            console.log(this._name + " is NOT eligible for voting");
        }
    };
    Person.prototype.printInfo = function () {
        console.log("name: " + this._name);
        console.log("address: " + this._address);
        console.log("age: " + this._age);
        console.log("phone: " + this._phone);
        console.log("email: " + this._email);
    };
    return Person;
}());
exports.Person = Person;
// const p1 = new Person('person1', 'pune', 30, '+9134435', 'person1@test.com')
// p1.canVote()
// p1.printInfo()
function testFunction() {
    console.log('inside test Function');
}
exports.testFunction = testFunction;
