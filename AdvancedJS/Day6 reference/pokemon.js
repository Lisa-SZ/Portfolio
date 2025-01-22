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
            document.getElementById("detail").innerHTML = ""
            document.getElementById("detail").insertAdjacentHTML('beforeend',
                `
                <h1>${pokemon.id}: ${pokemon.name}<h1>
                <img class="pokeImage" src="${pokemon.sprites.front_default}"/>
                <img class="pokeImage" src="${pokemon.sprites.back_default}"/>
                `
            )

        })
        .catch(error =>{
            console.error(error)
        })
    } catch(error){
        console.error(error)
    }
}

