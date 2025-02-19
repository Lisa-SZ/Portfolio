
// // Dark Mode
// window.addEventListener("DOMContentLoaded", function() {
// function toggleDark(){
//     var dlMode = document.body;
//     dlMode.classList.toggle("darkMode");
// }
// });

// // Clock
// window.addEventListener("DOMContentLoaded", function() {
//     setInterval(clock,1000)
//     function clock(){
//         let displayTime = new Date();
//         var hours = displayTime.getHours();
//         var minutes = displayTime.getMinutes();
//         var seconds = displayTime.getSeconds();
//         hours = hours < 10 ? "0" + hours : hours;
//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;
//         var timeString = hours + ":" + minutes;
//         var clockTime = document.getElementById("clock");
//         clockTime.innerHTML = timeString;
//     }
// });

// // Adding new elements
// window.addEventListener("DOMContentLoaded", function() {
// function newElement(type, text){
//     let newText = document.createElement(type);
//     newText.textContent = text;
//     document.body.appendChild(newText);
// }
// });

// // Form submission
// window.addEventListener("DOMContentLoaded", function() {
// const form = document.getElementById("messageform");
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
// })
// });

// window.addEventListener("DOMContentLoaded", function() {
// const thankText = "Thank you for your submission!"
// function displayText(type, text){
//     let submitText = document.createElement(type);
//     submitText.textContent = text;
//     document.body.appendChild(submitText);
// }
// });

// // Timed images
// window.addEventListener("DOMContentLoaded", function() {
//     var stitchImg1 = document.getElementById("stitch1");
//     var stitchImg2 = document.getElementById("stitch2");
//     var stitchImg3 = document.getElementById("stitch3");
// });

// window.addEventListener("DOMContentLoaded", function()  {
//     setTimeout(revealImg1(), 4000);
//     setTimeout(revealImg2(), 5000);
//     setTimeout(revealImg3(), 6000);
//     function revealImg1(){
//         stitchImg1.style.opacity = 1
//     }
//     function revealImg2(){
//         stitchImg2.style.opacity = 1
//     }
//     function revealImg3(){
//         stitchImg3.style.opacity = 1
//     }
// });




// Dark Mode
function toggleDark(){
    var dlMode = document.body;
    dlMode.classList.toggle("darkMode");
}

// Clock
try{
    setInterval(clock,1000)
}catch(error){
    console.error(error)
}

function clock(){
    let displayTime = new Date();
    var hours = displayTime.getHours();
    var minutes = displayTime.getMinutes();
    var seconds = displayTime.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeString = hours + ":" + minutes;
    var clockTime = document.getElementById("clock");
    clockTime.innerHTML = timeString;
}


// Adding new elements
function newElement(type, text){
    let newText = document.createElement(type);
    newText.textContent = text;
    document.body.appendChild(newText);
}

// Form submission
const form = document.getElementById("messageform");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
})

const thankText = "Thank you for your submission!"
function displayText(type, text){
    let submitText = document.createElement(type);
    submitText.textContent = text;
    document.body.appendChild(submitText);
}

// // Timed images
//     var stitchImg1 = document.getElementById("stitch1");
//     var stitchImg2 = document.getElementById("stitch2");
//     var stitchImg3 = document.getElementById("stitch3");

//     setTimeout(revealImg1(), 4000);
//     setTimeout(revealImg2(), 5000);
//     setTimeout(revealImg3(), 6000);
//     function revealImg1(){
//         stitchImg1.style.opacity = 1
//     }
//     function revealImg2(){
//         stitchImg2.style.opacity = 1
//     }
//     function revealImg3(){
//         stitchImg3.style.opacity = 1
//     }



// document.addEventListener("DOMContentLoaded", function(){
// });

