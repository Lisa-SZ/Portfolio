

// API
if (window.location.pathname=="/Gallery.html") {
const baseUrl = "https://api.artic.edu/api/v1/artworks"

https://api.artic.edu/api/v1/artworks?fields=id,title,image_id,main_reference_number

function listArt(){
    fetch("https://api.artic.edu/api/v1/artworks")
    .then(response => response.json())
    .then(allArt => console.log(allArt))
}

function fetchArt(){
    fetch("https://api.artic.edu/api/v1/artworks")
    .then(response => response.json())
    .then(function(allArt){
        allArt.results.forEach(function(art){
            fetchArt(art)
        })
    })
}

function fetchArtData(art){
    let url = art.url
    fetch(url)
    .then(response => response.json())
    .then(function(artData){console.log(artData)})
}

try{
    fetch(baseUrl)
    .then(response => {
        const responseJson = response.json()
        return responseJson
    })
    .then(data => {
        const arts = data.results
        arts.forEach(art => {
            document.getElementById("arts")
            .insertAdjacentHTML('beforeend', `<li onclick='detail("${art.url}")'><button>${art.name}</button></li>`)
        })
    })
    .catch(error => {
        console.error(error)
    })

} catch(error) {
    console.error(error)
}
}










// Dark Mode
function toggleDark(){
    var dlMode = document.body;
    dlMode.classList.toggle("darkMode");
}

// Clock
if (window.location.pathname=="/Home.html") {
    setInterval(clock,1000)
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
}

// Adding new elements
function newElement(type, text){
    let newText = document.createElement(type);
    newText.textContent = text;
    document.body.appendChild(newText);
}

// Form submission
if (window.location.pathname=="/Contact.html") {
    const form = document.getElementById("messageForm");
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
    })
    var thankText = document.getElementById("thankText")
    function displayText(type, text){
        let submitText = document.createElement(type);
        submitText.textContent = text;
        thankText.appendChild(submitText);
    }
}

// Timed images
// if (window.location.pathname=="/Blog.html") {
//     var stitchImg1 = document.getElementById("stitch1");
//     var stitchImg2 = document.getElementById("stitch2");
//     var stitchImg3 = document.getElementById("stitch3");

//     function revealImg1(){
//         stitchImg1.style.opacity = 1
//     }
//     function revealImg2(){
//         stitchImg2.style.opacity = 1
//     }
//     function revealImg3(){
//         stitchImg3.style.opacity = 1
//     }
//     setTimeout(revealImg1(), 4000);
//     setTimeout(revealImg2(), 5000);
//     setTimeout(revealImg3(), 6000);
// }


// document.addEventListener("DOMContentLoaded", function(){
// });

