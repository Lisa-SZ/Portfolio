// fetch api allows us to make requests of a web server

// API call to pokeAPI, logging results up to 151 to console

// then tells the page what to do after the data is fetched
// We use limit
function listKantoPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(allpokemon => console.log(allpokemon))
}

// Finding results for all pokemon, using the fetchpokemondata function we wrote
function fetchKantoPokemon(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon)
        })
    })
}

// function to call api, format the information into a Json file, and output it to console
function fetchPokemonData(pokemon){
    let url = pokemon.url // Saving the pokemon url to a variable
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){console.log(pokeData)})
}




// try & catch are used together to create what we call 'exceptions
// The code in the 'try' block will be checked to see if it will throw an error, and will run if it doesn't
// If it throws an error, the 'catch' block runs instead

const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151"
try{
    fetch(baseUrl)
    .then( response => {
        const responseJson = response.json()
        return responseJson
    })
    .then(data => {
        const pokemons = data.results
        pokemons.forEach(pokemon => {
            document.getElementById("pokemons")
            .insertAdjacentHTML('beforeend', `<li onclick='detail("${pokemon.url}")'><button>${pokemon.name}</button></li>`)
        })
    })
    .catch(error => {
        console.error(error)
    })

} catch(error) {
    console.error(error)
}


const detail = (url) => {
    try{
        fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            var pokeType = []
            for (let typeElement of pokemon.types){
                pokeType.push(" " + typeElement.type.name);
            }
            document.getElementById("detail").innerHTML = ""
            document.getElementById("detail").insertAdjacentHTML('beforeend',
                `
                <h1>${pokemon.id}: ${pokemon.name}</h1>
                <p>Type: ${pokeType}</p>
                <img class="pokeImage" src="${pokemon.sprites.front_default}"/>
                <img class="pokeImage" src="${pokemon.sprites.front_shiny}"/><br>
                <audio id="pokeCry" controls autoplay src="${pokemon.cries.latest}"/>
                `
            )
            document.getElementById("pokeCry").volume = 0.02;

        })
        .catch(error =>{
            console.error(error)
        })
    } catch(error){
        console.error(error)
    }
}




/* TASKS
1. Add the pokemons shiny sprite to the image, next to the default
2. Have the pokemons cry play when they appear onscreen (Careful to account for volume)
3a. Display a pokemons types on along with their name.
3b. Some pokemon have 2 types, be careful they still display correctly
*/


