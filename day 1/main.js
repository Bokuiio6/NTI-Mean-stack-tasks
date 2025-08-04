//  Task 1
// ======================================================

// 1. Declare variables
var myString     = "Khaled Mohamed";      // String
var myNumber     = 77;                    // Number
var myBoolean    = true;                  // Boolean
var myNull       = null;                  // Null
var myUndefined;                          // Undefined

// 2. Print values
console.log("myString:    ", myString);
console.log("myNumber:    ", myNumber);
console.log("myBoolean:   ", myBoolean);
console.log("myNull:      ", myNull);
console.log("myUndefined: ", myUndefined);

// 3. Print types
console.log("typeof myString:    ", typeof myString);    // "string"
console.log("typeof myNumber:    ", typeof myNumber);    // "number"
console.log("typeof myBoolean:   ", typeof myBoolean);   // "boolean"
console.log("typeof myNull:      ", typeof myNull);      // "object"
console.log("typeof myUndefined: ", typeof myUndefined); // "undefined"

// 4. Concatenate 
var firstName = "Khaled";
var lastName  = "Mohamed";

// 4a. The old way
var fullNameOld = firstName + " " + lastName;
console.log("\nFull Name :   ", fullNameOld);

// 4b. The New Way
var fullNameNew =  ` ${firstName}  ${lastName}`;
console.log("Full Name : ", fullNameNew);



// ======================================================
//  Task 2
// ======================================================

// 1. Define variables
var username = "Khaled";        
var password = "pass123"; 

// 2. Validation 
if (!username) {
  alert("❗ Username is required.");
} else if (password.length < 8) {
  alert("❗ Password must be at least 8 characters ");
} else {
  console.log(" Validation passed!");
  console.log("Username:", username);
  console.log("Password:", password);
}