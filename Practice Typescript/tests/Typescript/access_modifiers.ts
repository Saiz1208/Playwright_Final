class Exp_AccessModifier {
    public name: string = "Suresh IT Academy"; // public access modifier 
    private salary: number = 50000; // private access modifier
    protected location: string = "Hyderabad"; // protected access modifier

    sureshIT(): void {
        console.log("Welcome To " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Location: " + this.location);
    }
}
const am = new Exp_AccessModifier();
am.sureshIT();
console.log(am.name); // Accessible anywhere since it is public
//console.log(am.salary); // Error: 'salary' is private not accessible outside the class
//console.log(am.location); // Error: 'location' is protected not accessible outside the class

class Exp_AccessModifier_Child extends Exp_AccessModifier {
    childMethod(): void {
        console.log("Child Class Method");
        console.log("Welcome To " + this.name);
        // console.log("Salary: " + this.salary); // Error: 'salary' is private so not accessible in subclass
        console.log("Accessing Protected Member: " + this.location); // protected Accessible
    }
}
let child = new Exp_AccessModifier_Child();
child.childMethod();

//conditions
//if
let ant = 10;
if (ant <= 15) {
    // only condition is true then if block will execute
    console.log("IF statement executed");
}

//if-else
let ant1 = 20;
if (ant1 <= 15) {
    //if condition is true then if block will execute
    console.log("IF statement executed");
} else {

    //if condition is false then else block will execute
    console.log("ELSE statement executed");
}

//else-if
let ant2 = 35;
if (ant2 <= 15) {
    //if condition is true then if block will execute
    console.log("IF_condition 1 statement executed");
} else if (ant2 <= 25) {
    //if condition is false then else-if condition 2  is true then block will execute
    console.log("ELSE-IF condition 2 statement executed");
} else if (ant2 <= 35) {
    //if condition is false then else-if condition 3 is true then block will execute
    console.log("ELSE-IF condition 3 statement executed");
}
else {
    //if all conditions are false then else block will execute
    console.log("ELSE statement executed");
}

//nested if
let a = 40;
let b = 30;
if (a == 40) {
    //if condition 1 is true then block will execute
    if (b == 20) {
        //if condition 2 is true then block will execute
        console.log("a value is 40 and b value is 20");
    }
    else {
        //if condition 2 is false then else block will execute
        console.log("else statement of 2nd condition");
    }
}
else {
    //if condition 1 is false then else block will execute
    console.log("else statement of 1st condition");
}

//Loops
//while loop
let count: number = 1;

while (count <= 3) {
    console.log("Count:", count);
    count++;
}

//do-while loop
let num: number = 3;
do {
    console.log("Number:", num);
    num++;
} while (num < 5);

//for loop
for (let i: number = 5; i <= 5; i++) {
    console.log("Value:", i);
}

//break statement
for (let i = 4; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Digit:", i);
}

//continue statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("code:", i);
}

//switch statement

let a2 = 10;
let b2 = 20;
let choice = 3;
switch (choice) {
    case 1:
        console.log("Addition: " + (a2 + b2)); break;
    case 2:
        console.log("Subtraction: " + (a2 - b2));
        break; case 3:
        console.log("Multiplication: " + (a2 * b2)); break;
    case 4:
        console.log("Division: " + (a2 / b2)); break;
    default:
        console.log("Invalid choice");
}

//array
let arr: number[] = [10, 20, 30, 40, 50];
console.log("Array Elements:", arr);
console.log("Array Length:", arr.length);
console.log("Array Index 2:", arr[2]);

//for of loop
for (let element of arr) {
    console.log("Elements:", element);
}
