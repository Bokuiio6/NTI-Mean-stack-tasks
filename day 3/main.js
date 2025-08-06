// Task 1: Array of Numbers

//  Create array
var numbers = [5, -3, 12, 0, -7, 8, 19, -1, 4, -10];

var sumPositive = 0;
var sumAll = 0;

for (var i = 0; i < numbers.length; i++) {
  var n = numbers[i];
  sumAll += n;           
  if (n < 0) {
    continue;           
  }
  sumPositive += n;
}

// Display results
console.log("Task 1:");
console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", sumAll);

numbers.push(27);
numbers.shift();

console.log("Modified array:", numbers);
console.log("--------------------");


// Task 2: Student Object


var student = {
  name: "Ali",
  age: 20,
  grade: "B",
  isGraduated: false
};


console.log("Task 2:");
console.log("Name:", student.name);
console.log("Age:", student.age);

student.grade = "A";

console.log("Keys:", Object.keys(student));


console.log("Values:", Object.values(student));

student.email = "ali@gmail.com";

delete student.isGraduated;

// Display updated object
console.log("Updated student object:", student);
console.log("--------------------");


// Task 3: Student Management App


//  Create an array of student objects
var students = [
  { name: "Mona", age: 22, grade: "C", isGraduated: true },
  { name: "Sara", age: 19, grade: "B", isGraduated: false },
  { name: "Omar", age: 24, grade: "A", isGraduated: true },
  { name: "Laila", age: 21, grade: "B", isGraduated: false }
];

//  Calculate average age
var totalAge = 0;
for (var i = 0; i < students.length; i++) {
  totalAge += students[i].age;
}
var avgAge = totalAge / students.length;

// Count graduated vs non-graduated
var graduatedCount = 0;
var notGraduatedCount = 0;
for (var i = 0; i < students.length; i++) {
  if (students[i].isGraduated) {
    graduatedCount++;
  } else {
    notGraduatedCount++;
  }
}

// Display keys & values for each student
console.log("Task 3:");
for (var i = 0; i < students.length; i++) {
  console.log("Student", i + 1, "Keys:", Object.keys(students[i]));
  console.log("Student", i + 1, "Values:", Object.values(students[i]));
}

//  Add a new student
var newStudent = {
  name: "Youssef",
  age: 23,
  grade: "A",
  isGraduated: false
};

//  Add email to the new student
newStudent.email = "youssef@example.com";
students.push(newStudent);

// Update statistics with new student
totalAge += newStudent.age;
if (newStudent.isGraduated) {
  graduatedCount++;
} else {
  notGraduatedCount++;
}
avgAge = totalAge / students.length;

// Delete isGraduated from all students
for (var i = 0; i < students.length; i++) {
  delete students[i].isGraduated;
}

//  Collect student names
var namesList = [];
for (var i = 0; i < students.length; i++) {
  namesList.push(students[i].name);
}

// Display final results
console.log("--- Final Results ---");
console.log("Student names:", namesList);
console.log("Average age:", avgAge.toFixed(2));
console.log("Graduated students:", graduatedCount);
console.log("Non-graduated students:", notGraduatedCount);
console.log("All students:", students);