class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    run() {
        console.log(`see ${this.name} run`);
    }

    next() {
        console.log(`next year you will be ${this.age + 1}`);
    }
};

const person1 = new Person(`jeff`, 22);

person1.run();
person1.next();

console.log(person1);