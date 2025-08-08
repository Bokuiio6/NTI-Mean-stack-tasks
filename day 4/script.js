
// Task 1: Functions & Callbacks

// 1. multiply()
function multiply(a, b) {
  return a * b;
}

// 2. calculate()
function calculate(x, y, operation) {
  return operation(x, y);
}

// 3. displayResult()
function displayResult(result) {
  console.log("Result:", result);
}

var product = calculate(6, 7, multiply);
displayResult(product);  // → "Result: 42"



// Task 2: Timers (setTimeout / setInterval)

// a) greetUser()
function greetUser() {
  console.log("Hello, User!");
}
var greetTimer = setTimeout(greetUser, 3000);

// b) willBeCleared()
function willBeCleared() {
  console.log("This will be cleared!");
}
var timeoutId = setTimeout(willBeCleared, 5000);
clearTimeout(timeoutId);  // Cancel before execution


//  Part B

console.log("Full Countdown (10 seconds):");
var fullCounter   = 10;
var fullIntervalId = setInterval(fullTick, 1000);

function fullTick() {
  if (fullCounter > 0) {
    console.log(fullCounter);
    fullCounter--;
  } else {
    console.log("Time's up!");
    clearInterval(fullIntervalId);

    startEarlyCountdown();
  }
}


// Part C

function startEarlyCountdown() {
  console.log("\nEarly Countdown (5 seconds):");
  var earlyCounter    = 10;
  var earlyIntervalId = setInterval(earlyTick, 1000);

  function earlyTick() {
    if (earlyCounter > 0) {
      console.log(earlyCounter);
      earlyCounter--;
    } else {
      // If it ever naturally reaches 0, clear too
      console.log("Early countdown finished.");
      clearInterval(earlyIntervalId);
    } 
  }

  // Stop the early countdown after 5 seconds
  setTimeout(function() {
    clearInterval(earlyIntervalId);
    console.log("Countdown stopped after 5 seconds");
  }, 5000);
}
