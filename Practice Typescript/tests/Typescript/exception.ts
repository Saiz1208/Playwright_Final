

// exception handling in TypeScript

try {
    let sub: number[] = [10, 20, 30, 40, 50]; 
    console.log(sub[16].toString()); 
    // This will throw an error because index 16 is out of bounds
}
catch (error) {
    console.log("An error occurred: " + error);
}
finally {
    console.log("This block will always execute.");
}

//string operations in TypeScript
// Program 1: Basic String Operations in TypeScript

// Step 1: Declare a string variable 
let userName: string = "     Suresh ";

// Step 2: Print original string 
console.log("Original Name:", userName);

// Step 3: Remove extra spaces using trim() 
let trimmedName = userName.trim(); 
console.log("After Trim:", trimmedName);

// Step 4: Convert string to Uppercase 
console.log("Uppercase:", trimmedName.toUpperCase());

// Step 5: Convert string to Lowercase 
console.log("Lowercase:", trimmedName.toLowerCase());

// Step 6: Find length of string
console.log("Length of Name:", trimmedName.length);

// Step 7: Replace text in string
let message: string = "Hi Students";
let newMessage = message.replace("Hi", "Good Morning"); 
console.log("Replaced Message:", newMessage);

// Step 8: Function using string and template literal 

function greetUser(name: string): string {
return `Welcome ${name}`;
}
console.log(greetUser("Students"));

// Step 9: Array of strings and loop
let tools1: string[] = ["Selenium", "Playwright", "TypeScript"]; 
for (let tool of tools1) {
console.log("Automation Tool:", tool);
}
