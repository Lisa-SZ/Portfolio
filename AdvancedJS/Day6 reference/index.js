// Creating a variable to represent our HTML element
const demoElement = document.getElementById("locationDemo")

// Browser API's are built into the browser
// Geolocation is one example of a browser API
// DO NOT SHARE YOUR SCREEN WITH THIS CODE IN YOUR PAGE

function findMe(){
    // If a geolocation value is present
    if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(showMe)  
    }else{
        demoElement.innerHTML = "Geolocation is not available in your browser"
    }
}

function showMe(position){
    //demoElement.innerHTML = (`Latitude: ${position.coords.latitude} <br>Longitude: ${position.coords.longitude}`)
    demoElement.innerHTML = ("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude)
}

// Form validation
const input = document.getElementById("loginBar");

function login(){
    // Checking if input is valid
    if(!input.checkValidity()){
        document.getElementById("loginDemo").innerHTML = input.validationMessage;
    } else {
        document.getElementById("loginDemo").innerHTML = "Thank you for following the instructions <3"
    }
}