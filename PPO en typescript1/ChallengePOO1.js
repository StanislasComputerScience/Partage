var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    return Person;
}());
var person1 = new Person("John", 40);
var person2 = new Person("Mary", 35);
person1.tellMyAge();
person1.tellMyName();
person2.tellMyAge();
person2.tellMyName();
