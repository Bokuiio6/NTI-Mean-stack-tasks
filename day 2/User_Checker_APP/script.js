var userName = prompt("What's your name?");
var birthYearInput = prompt("Enter your birth year (e.g., 1990):");
var birthYear = parseInt(birthYearInput, 10);
var isStudent = confirm("Are you a student?\n\nOK = Yes, Cancel = No");

// 2. Process input
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
var category;

if (age < 13) {
  category = "Kid";
} else if (age <= 17) {
  category = "Teen";
} else if (age <= 59) {
  category = "Adult";
} else {
  category = "Senior";
}

// 3. the message
var message = "Hello " + userName + ", you are " + age + " years old.\n" +
              "Category: " + category + ".";

if (isStudent) {
  message += "\nDon't forget to study hard!";
}

// 4. Show the output
console.log(message);                      
alert(message);                             
document.getElementById("output").innerText = message;  
