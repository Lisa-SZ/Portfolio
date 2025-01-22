
function add(x,y){
    return x + y
}
function subtract(x,y){
    return x - y
}
function multiply(x,y){
    return x * y
}
function divide(x,y){
    return x / y
}
console.log(multiply(3,5));

// function to see if a number is even or odd
function oddOrEven(num){
    if (num % 2 == 1){ // Can use === to check for value and type. will do the same
        return "Odd"
    } else if (num % 2 == 0){
        return "Even"
    } else {
        return "Not a number. Try again"
    }
}
console.log(oddOrEven("bob"));
// different way of doing this in notes screnshots


// function that adds two numbers together, subtracts that number from a third, then multiplies the result by another number
function maths(a,b,c,d){
    return multiply(subtract(c,add(a,b)),d);
}
console.log(maths(1,2,5,2))

// function to add two pairs of numbers together, then multiply the two results together
function addMultiply(pair1a,pair1b,pair2a,pair2b){
    return (pair1a + pair1b) * (pair2a + pair2b)
}
console.log(addMultiply(2,2,3,3))


// FizzBuzz
function fizzBuzz1(number){
    if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0){
        return "FizzBuzzBang"
    } else if (number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz"
    } else if (number % 3 === 0 && number % 7 === 0){
        return "FizzBang"
    } else if (number % 5 === 0 && number % 7 === 0){
        return "BuzzBang"
    } else if (number % 3 === 0){
        return "Fizz"
    } else if (number % 5 === 0){
        return "Buzz"
    } else if (number % 7 === 0){
        return "Bang"
    } else {
        return number
    }
}
console.log(fizzBuzz1(105));

// FizzBuzz easy expansion
// Less code to write and easier to add more conditions
function fizzBuzz(number){
    let output = ""; //empty string
    if (number % 3 === 0) {output += "Fizz";} // += is short for result = result + "Fizz"
    if (number % 5 === 0) {output += "Buzz";}
    if (number % 7 === 0) {output += "Bang";}
    
    if (output == "") {output = number;}  // can also be written as: "return output || number" but is less easy to read
    return (output)
}
console.log(fizzBuzz(105)); // outputs FizzBuzzBang


// function to calculate change that should be paid after a transaction
function change(cost,money){
    if (money < cost){
        return "Insufficient funds"
    } else if (money > cost){
        var amount = money - cost;
    } else if (money === cost) {
        return "No change needed"
    } else {
        return "Error try again"
    }

    const denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let changeBreakdown = [];

    for (let denomination in denominations){
        if (amount >= denomination){
            changeBreakdown.push(denomination)
            amount - denomination
        }
    }
    return changeBreakdown;
}
// let curency = "£"
console.log(change(34.50,40));