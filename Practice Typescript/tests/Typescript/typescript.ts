//print
console.log("Hello, TypeScript!");

//let declaration
let x: number = 10;
console.log(`The value of x is: ${x}`);
x = 30;
console.log(`The value of x is: ${x}`);

//constant declaration
const y: number = 20;
console.log(`The value of y is: ${y}`);

//variable declarationclear
var welcomeMessage: string = "Welcome to TypeScript!";
console.log(welcomeMessage);

//Class declaration
class Hello {
    //Method declaration
    m1(): void {
        console.log("M1 Executed");
    }
    m2(): void {
        console.log("M2 Executed");
    }
    m3(): void {
        console.log("M3 Executed");
    }

}

//Object creation
let m = new Hello();
//Method calling
m.m2();
m.m1();
m.m3();
