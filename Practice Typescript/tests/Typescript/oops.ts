//OOPs in typescript

//Inheritance in typescript

//single level inheritance in typescript

class A {
    hai(): void {
        console.log("class A method");
    }
}

//class B is inheriting class A methods

class B extends A { //class B is child class of class A using extends keyword 
    friend(): void {
        console.log("class B method");
    }
}

let obj = new B();
obj.hai(); //class A method
obj.friend(); //class B method

//multilevel inheritance in typescript

class C extends B { //class C is child class of class B using extends keyword
    students(): void {
        console.log("class C method");
    }
}

let obj1 = new C();
obj1.hai(); //class A method
obj1.friend(); //class B method
obj1.students(); //class C method

//polymorphism in typescript

//method overloading in typescript 

class Printer {
    print(value: string): void; // method 1
    print(value: number): void; // method 2

    // One implementation handles both
    print(value: string | number): void {
        console.log(value);
    }
}

const printer = new Printer();

printer.print("Hello"); // Hello
printer.print(100);     // 100
// printer.print(true); // TypeScript error

//method overriding in typescript

class OverRide {
    add(a: number, b: number): void {
        console.log(a + b);
        console.log("Existing-Functionality--Old Car");
    }
}
class OverRide1 extends OverRide {
    add(a: number, b: number): void {
        console.log(a - b);
        console.log("New -Functionality--New Car");
    }
}
let ob1 = new OverRide1();
ob1.add(10, 20);

//Encapsulation in typescript

class Atm {
    //DT & Variable : To represent the daata
    private actualpin: number = 1234;
    //Method: To represent the functionality
    public verifyPin(expectedPin: number): void {
        if (this.actualpin == expectedPin) {
            console.log("Pin Verified");
        }
        else {
            console.log("Invalid Pin");
        }
    }
}
let obj2 = new Atm();
obj2.verifyPin(1234);
obj2.verifyPin(1111);
//obj2.actualpin = 5678; // Error: Property 'actualpin' is private and only accessible within class 'Atm'.

//abstract class in typescript

abstract class Vehicle {
    abstract start(): void; // Abstract method
    abstract stop(): void;  // Abstract method
}
class Car extends Vehicle {
    start(): void {
        console.log("Car started");
    }
    stop(): void {
        console.log("Car stopped");
    }
}
let car = new Car();
car.start();
car.stop();

//interface in typescript

//Task assign by Team Lead

interface playwright {
    openapplication(): void;
    closeapplication(): void;
}
interface selenium {
    openapplication(): void;
    closeapplication(): void;
}

//Task implemented by Tester1 and Tester2
class Tester1_Chrome implements playwright, selenium {
    openapplication(): void {
        console.log("Opening  application-Chrome");
    }
    closeapplication(): void {
        console.log("Closing application-Chrome");
    }
}
class Tester2_Firefox implements playwright, selenium {
    openapplication(): void {
        console.log("Opening  application-Firefox");
    }
    closeapplication(): void {
        console.log("Closing application-Firefox");
    }
}
let obj3 = new Tester1_Chrome();
obj3.openapplication();
obj3.closeapplication();
console.log("********************");

let obj4 = new Tester2_Firefox();
obj4.openapplication();
obj4.closeapplication();

