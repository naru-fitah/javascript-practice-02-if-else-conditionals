// 01 Check if a number is even or odd.
let number = 31
if (number % 2 == 0) {
    // % 2 -> The remainder operator % gives the remainder when used with a number.
    console.log("This number is even")
} else {
    console.log("This number is odd")
}

// 02 Create a function isAdult(age) that returns true if age is 18 or above.

let age = 18
function isAdult(age) {
    if (age > 17) {
        return true
    }
else {
    return false
}
} 
console.log(isAdult(age))

// 03 Check if a number is positive, negative, or zero.

let numberTest = 0
if(numberTest > 0) {
    console.log("positive")
} else if(numberTest === 0) {
    console.log("zero")
} else {
    console.log("negative")
}

// 04 Write a function isDivisibleByFive(num) that returns true if num is divisible by 5.

let num = 16
function isDivisibleByFive(num) {
    if (num % 5 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isDivisibleByFive(num))

// 05 Compare two numbers and print which one is greater.

let a = 30
let b = 11
if (a > b) {
    console.log(a)
} else {
    console.log(b)
}

// 06 Write a function that returns "hot" if a temperature is above 30, "cold" if below 10, and "moderate" otherwise.
let temp = 31
function temperature(temp) {
    if(temp > 30) {
        return "hot"
    } else if(temp < 10) {
        return "cold"
    } else {
        return "moderate"
    }
}
console.log(temperature(temp))

// 07 Check if a given year is a leap year.

let year = 2028
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // divisible by 4 AND NOT divisible by 100 (unless also divisible by 400)
    console.log("this is a leap year")
} else {
    console.log("this is NOT a leap year")
}


// 08 Write a function canWatchMovie(age, withParent) that returns true if age is 18+ or if they have a parent.

let ageMovie = 17
let withParent = true

function canWatchMovie(ageMovie, withParent) {
    if (ageMovie > 17 || withParent === true) {
        return true
    } else {
        return false
    }
}
console.log(canWatchMovie(ageMovie, withParent))


// 09 Check if a user is logged in (true/false) and print "Welcome!" or "Please log in!".

let isLogged = false

if(isLogged === true) {
    console.log("Welcome!")
} else {
    console.log("Please, log in!")
}

// 10 Check if a number is between 50 and 100.

let total = 99
if (total > 50 && total < 100) {
    console.log("True")
} else {
    console.log("False")
}