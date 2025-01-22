// Day 2 AM Tasks:

let age = 24;
if (age >= 18){
    console.log("What would you like to order")
} else {
    console.log("You are unable to order")
}

// alternative:
// condition ? exprIfTrue : exprIfFalse
// let age = 18;
// age > 17
//     ? console.log("What would you like?")
//     : console.log("Sorry I can't serve you.");



let num1 = 5;
let num2 = 46;
if (num1 > num2){
    console.log("num1 is bigger")
} else if (num2 > num1){
    console.log("num2 is bigger")
} else {
    console.log("The numbers are the same")
}


let oddOrEven = 73;
if (oddOrEven % 2 === 1){
    console.log("Odd number")
} else {
    console.log("Even number")
}


let bigNumber = 89;
if (bigNumber >= 100){ /* When doing greater than, start with biggest value as code is read top to bottom */
    console.log("Number is greater than 100")
} else if (bigNumber >= 50){
    console.log("Number is between 50 and 100")
} else if (bigNumber >= 20){
    console.log("Number is between 20 and 50")
} else if (bigNumber >= 10){
    console.log("Number is between 10 and 20")
} else if (bigNumber >= 5){
    console.log("Number is between 5 and 10")
} else {
    console.log("Number is less than 5")
}

let fizzBuzz = 15;
if (fizzBuzz % 3 == 0 && fizzBuzz % 5 == 0){
    console.log("FizzBuzz")
} else if (fizzBuzz % 3 == 0){
    console.log("Fizz")
} else if (fizzBuzz % 5 == 0){
    console.log("Buzz")
} else if(fizzBuzz === Number){
    console.log(`${fizzBuzz} is not a multiplier of 3 or 5`)
} else {
    console.log("Not a number. Please try again")
}

// Alternative
if (fizzBuzz % 3 == 0){
    console.log("Fizz")
} else if (fizzBuzz % 5 == 0){
    console.log("Buzz")
} else if(fizzBuzz % 15 == 0){
    console.log("FizzBuzz")
}else{
    console.log(fizzBuzz)
}
if (typeof num !== 'number'){ // Filter out non numbers
    console.log("Must be a number");
    if (num === undefined){
        console.log("MissingNo#");
    }
// Main logic
} else if (num % 2 === 0){
    console.log("Even");
} else {
    console.log("Odd");
};



// Day 2 PM Tasks:

let rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
for (let colourCount = 0; colourCount < rainbow.length; colourCount++){
    console.log(rainbow[colourCount])
}
// Alternatively:
for (let colourCount of rainbow){
    console.log(rainbow)
}

let count = 0;
while (count <= 50){
    console.log(count);
    count = count + 5;
}



let incCount = 0;
let increasing = 0;
while (incCount <= 500){
    console.log(incCount);
    increasing ++
    incCount = incCount + increasing
}

// alternating counting
let alternating = 0;
let changing = 0;
while (alternating <= 20){
    console.log(alternating);
    changing ++
    if (changing % 2 == 1){
        alternating = alternating + 2
    } else { 
        alternating --
    } 
}

// Stop at exactly 20
let alternating2 = 0;
let changing2 = 0;
while (alternating2 <= 20){
    console.log(alternating2);
    changing2 ++
    if (alternating2 != 20){
        if (changing2 % 2 == 1){
            alternating2 = alternating2 + 2
        } else { 
            alternating2 --
        } 
    } else {
        alternating2 ++
    }
}

// alternates counting up or down by increasing increments, stopping when it reaches +50 or -50
let altIncCount = 0;
let altChanging = 0;
let altIncreasing = 0;
let altDecreasing = 0;
while (altIncCount <= 50 || altIncCount >= -50){
    console.log(altIncCount);
    altChanging ++
    if (altChanging % 2 == 1){
        altIncreasing ++
        altIncCount = altIncCount + altIncreasing
    } else {
        altDecreasing ++
    }
}

// FizzBuzz
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}