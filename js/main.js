window.addEventListener('load', init);

//Global vars
let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=898';
let gallery;

function init() {
    gallery = document.getElementById('pokemon-gallery');
getPokemons();
}

/**
 * Do the actual AJAX call to the provided URL
 */
function getPokemons() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(createPokemonCards)
        .catch(ajaxErrorHandler);
}

/**
 * Do something nice with the data you got from the external API
 *
 * @param data
 */
function createPokemonCards(data) {
    console.log(data);

    for (let pokemon of data.results){
        let pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');
        pokemonCard.dataset.name = pokemon.name;

        gallery.appendChild(pokemonCard)

        fetch(pokemon.url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(fillPokemonCard)
            .catch(ajaxErrorHandler);
    }
}

function fillPokemonCard(pokemon){
    let pokemonCard = document.querySelector(`.pokemon-card[data-name='${pokemon.name}']`)

    let name = pokemon.name;
    let pokedex = pokemon.id;
    let img = pokemon.sprites.front_default; // pokemon.sprites.other.home.front_default
    let imgShiny = pokemon.sprites.front_shiny; // pokemon.sprites.other.home.front_default

    let title = document.createElement('h2');
    title.innerHTML = `#${pokedex} ${name}`
    pokemonCard.appendChild(title)

    let image = document.createElement('img')
    image.src = img;
    pokemonCard.appendChild(image)

    let imageShiny = document.createElement('img')
    imageShiny.src = imgShiny;
    pokemonCard.appendChild(imageShiny)
}
/**
 * Do something useful with the error you got back from the external API
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Something went wrong and the Pokémon died. Please come back later when we bred some more.';
    gallery.before(error);
}

/**
'


*/
