var assert = require('assert');
// import  assert  from  'assert';
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (n) {
        return this.pin === n;
    };
    return BankCustomer;
}());
// Exemple d'utilisation
var customer1 = new BankCustomer("Alice", "1234");
console.log(customer1.getName()); // Affiche "Alice"
console.log(customer1.verifyPinInput("1234")); // Affiche true
console.log(customer1.verifyPinInput("4321")); // Affiche false
// Tests
console.log("---\n");
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
