// 1. Gather Employee Data
var name = prompt("Enter ur name:");
var ageInput = prompt("Enter ur age:");
var age = parseInt(ageInput, 10);

var expInput = prompt("Enter ur years of experience:");
var yearsExp = parseFloat(expInput);

var ratingInput = prompt("Self-rating (1 to 10):");
var rating = parseInt(ratingInput, 10);

var salaryInput = prompt("Enter base salary (e.g., 3000):");
var baseSalary = parseFloat(salaryInput);

// 2. Determine Job Category
var category;
if (yearsExp < 2) {
  category = "Junior";
} else if (yearsExp >= 2 && yearsExp < 5) {
  category = "Mid-Level";
} else if (yearsExp >= 5 && yearsExp < 10) {
  category = "Senior";
} else {
  category = "Expert";
}

// 3. Check Performance Level
var performance;
switch (true) {
  case (rating >= 9):
    performance = "Excellent";
    break;
  case (rating >= 7):
    performance = "Good";
    break;
  case (rating >= 5):
    performance = "Average";
    break;
  default:
    performance = "Needs Improvement";
}

// 4. Salary Calculation
var bonusPercent;
if (yearsExp <= 2) {
  bonusPercent = 0.10;  
} else if (yearsExp <= 5) {
  bonusPercent = 0.15;  
} else {
  bonusPercent = 0.20; 
}
var bonusAmount = baseSalary * (bonusPercent);
var finalSalary = baseSalary + bonusAmount;

// 5. Work Shift Time Calculation
var now = new Date();
var hour = now.getHours();
var shift;
if (hour >= 9 && hour < 18) {
  shift = "Day Shift";
} else {
  shift = "Night Shift";
}

// 6. Summary Output
var report  = "Employee Report for: " + name + "\n";
    report += "Age: " + age + "\n";
    report += "Years of Experience: " + yearsExp + " → " + category + "\n";
    report += "Self-Rating: " + rating + " → " + performance + "\n";
    report += "Base Salary: " + baseSalary.toFixed(2) + "\n";
    report += "Bonus (" + (bonusPercent*100) + "%): " + bonusAmount.toFixed(2) + "\n";
    report += "Final Salary: " + finalSalary.toFixed(2) + "\n";
    report += "Current Hour: " + hour + ":00 → " + shift;

// a) Console
console.log(report);

// b) Alert
alert(report);

// c) DOM
document.getElementById("report").innerText = report;
