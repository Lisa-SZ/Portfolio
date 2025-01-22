// Day 1 AM Tasks:

let myName = "Lisa";
alert("Hello " + myName + "!");

let colour = "Blue";
let tv = "Criminal Minds";
console.log(myName + "'s favourite colour is " + colour + " and favourite TV show is " + tv);

let breakfast = "Oatmeal";
let lunch = "Sausage roll";
let dinner = "Noodles";

console.log("Yesterday's meals:")
console.log(breakfast);
console.log(lunch);
console.log(dinner);

breakfast = "Cereal";
lunch = "Sandwich";
dinner = "Pasta";

console.log("Todays's meals:")
console.log(breakfast);
console.log(lunch);
console.log(dinner);

// Day 1 PM Tasks:

let firstName = prompt("Please enter your name:");
console.log(`Hello ${firstName}`);

let number = prompt("Enter a number:");
alert(number*10)

// Math object:
let a = Math.round(6.6); /* rounds to 7 */
let b = Math.floor(6.6); /* rounds down to 6 */
let c = Math.floor((Math.random() * 10) + 1); /* random whole number between 1 and 10*/
console.log(a, b, c)

// Research task 
randNum = Math.random();
randInt = Math.ceil(10 *(Math.random()));
console.log(randNum)
console.log(randInt)
function getRandomInt(max){
    return Math.floor
}