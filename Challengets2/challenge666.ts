interface User {
    name: string;
    age?: number;
    birthday?: Date;
}

const prettyPrintWilder = (users: User[]): void => {
    users.map((user): void => {
        console.log(`${user.name} is ${user.age} years old`);
    }); // Ici les void y servent à rien d'après Alice !
};

const wilders: User[] = []; 

const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: new Date("1990-02-10") };
const user3 = { name: "Jacques", age: 25 };

wilders.push(user1);
wilders.push(user2);
wilders.push(user3);

prettyPrintWilder(wilders);