class Person {
    private name: string;
    private age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyAge(): void {
        console.log(`I am ${this.age} years old`);
    }

    tellMyName(): void {
        console.log(`I am ${this.name}`);
    }
}

let person1 = new Person("John", 40);
let person2 = new Person("Mary", 35);

person1.tellMyAge();
person1.tellMyName();
person2.tellMyAge();
person2.tellMyName();
