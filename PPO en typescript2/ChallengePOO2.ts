const assert = require('assert');
// import  assert  from  'assert';

class BankCustomer {
    private name: string;
    private pin: string;

    constructor(name: string, pin: string) {
        this.name = name;
        this.pin = pin;
    }

    public getName(): string {
        return this.name;
    }

    public verifyPinInput(n: string): boolean {
        return this.pin === n;
    }
}

// Exemple d'utilisation
let customer1 = new BankCustomer("Alice", `1234`);
console.log(customer1.getName()); // Affiche "Alice"
console.log(customer1.verifyPinInput("1234")); // Affiche true
console.log(customer1.verifyPinInput("4321")); // Affiche false

// Tests
console.log("---\n");

const customer = new BankCustomer('John Doe', '3579');

assert.equal(typeof customer.getName, 'function');

assert.equal(typeof customer.verifyPinInput, 'function');

assert.equal(customer.getName(), 'John Doe');

assert.ok(customer.verifyPinInput('3579'));