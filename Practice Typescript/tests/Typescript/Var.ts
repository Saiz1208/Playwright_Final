
//data types in typescript
//PRIMITIVE DATA TYPES
//string
let academyName: string = "Suresh IT Academy";
console.log(`Hello, ${academyName}!`);
//number
let age: number = 30;
let price: number = 19.99;
let hex: number = 0x1a;
let binary: number = 0b1010;
let octal: number = 0o12;
console.log(age);
console.log(price);
console.log(hex);
console.log(binary);
console.log(octal);

//boolean
let a: boolean = true;
let b: boolean = false;
console.log(a);
console.log(b);

//null and undefined
let c: null = null;
let d: undefined;
console.log(c);
console.log(d);

//object data type/ non-primitive data type
//objects

let person: object = { name: "Alia", age: 30 };
console.log(person);

//ARRAYS
let n: number[] = [1, 2, 3, 4, 5];
let s: string[] = ["Apple", "Banana", "Flower"];
console.log(n);
console.log(s);

//TUPLE
let tuple: [string, number] = ["Hello", 42];
console.log(tuple);

//special data type - any
let value: any = "Hello";
console.log(value);
value = 42;
console.log(value);

//variables in typescript
class Variable {
    y = 20; //instance variable   
    static x = 30; //static variable
    //non static methods
    m1(): void {
        let z = 10; //local variable
        console.log("M1 Executed");
        console.log(z + "is the local variable"); //accessing local variable 
        //+ does not print space between z and string
    }
    m2(): void {
        console.log("M2 Executed");
        console.log(this.y, "is the instance variable");  //accessing instance variable
        //, print space between y and string
    }
    m3(): void {
        console.log("M3 Executed");
        console.log(`${Variable.x} is the static variable`); //accessing static variable   
        //The advantage of ${} is readability, especially with multiple values or calculations:
        console.log(`The sum of ${Variable.x} and ${this.y} is ${Variable.x + this.y}`);
    }
    //static method 
    static st(): void {
        console.log("static method executed");
    }
}
// non-static method can be called using object of the class
let variables = new Variable();
variables.m1();
variables.m2();
variables.m3();
console.log(Variable.x); //accessing static variable outside the class  

//static method can be called using class name
Variable.st();

class StaticMethod {
    a = 1;
    b = 2;

    //static method with arguments
    static add(a: number, b: number): number {
        console.log(`The sum of ${a} and ${b} is ${a + b}`);
        return a + b;
    }
    //non-static method with arguments
    multiply(a: number, b: number): number {
        let c = a * b;
        console.log(`The product of ${a} and ${b} is ${c}`);
        return c;
    }
}
//calling static method using class name
StaticMethod.add(5, 10);
//non-static method can be called using object of the class
let sm = new StaticMethod();
sm.multiply(5, 10);

//constructor in typescript
class Student {
    constructor() {
        console.log('constructor is executed');
    }
    m1(): void {
        console.log('m1 method is executed');
    }
}
const s1 = new Student();
s1.m1();
console.log("Constructor executed"); //true
