/*
JavaScript Events Tasks:
1: Using an event listener I would like you to create a button that alternates between showing an image and hiding an image on click.
For example, the image is shown to start with, the first click hides the image and the following click shows the image again. So on and so forth.

2: Create a text input field and a submit button. 
Using an event listener on the button I would like you to add an element to the DOM that contains the value of the text in the input field.
Bonus points if you are able to also clear the input field on click.

3: Research the different types of JavaScript events see what different information you have access to with the event object. 
Think about how this information could potentially be used.
https://developer.mozilla.org/en-US/docs/Web/Events

Stretch Task:
Using event listeners I would like you to put together a basic JavaScript counter. The count should be displayed, starting at zero. 
Plus and minus buttons should increase or decrease the counter by one respectively and the count should be updated each time a button is clicked.
*/

// PM Tasks:
// Create a function that triggers on a timeout
// Create a clock displaying hours & minutes


// Task 1
const image = document.getElementById("landscape");
const hideButton = document.getElementById("hideImage");
hideButton.addEventListener("click", () => {
    console.log("Hide image button was clicked")
    if(image.style.display === "none"){
        image.style.display = "block";
    } else {
        image.style.display = "none"}
});

// Task 2
const textInput = document.getElementById("textField")
const displayButton = document.getElementById("displayText")
displayButton.addEventListener("click", () => {
    console.log("Display text button was clicked")

})

// <button onclick = "newElement('p', textfield.value)">Submit</button>
function newElement(type, text){
    let newText = document.createElement(type);
    newText.textContent = text;
    document.body.appendChild(newText);
}



// A function that triggers on a timeout



// A clock displaying hours & minutes (& seconds)
setInterval(clock, 1000);
function clock(){
    let displayTime = new Date();
    document.getElementById("clock").innerHTML=
    displayTime.getHours() + ":" +
    displayTime.getMinutes() + ":" +
    displayTime.getSeconds();
}
clock();
