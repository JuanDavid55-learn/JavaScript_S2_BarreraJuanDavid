const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let BuscarPokemon = 1;
const verPokemon = (pokemon, callback) => {
    const xhr = new XMLHttpRequest();
    
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    xhr.open("GET", URL, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            callback(null, data);
        } 
        else {
            callback("No se encontró el Pokémon", null);
        }
    };
    xhr.send();
};

const ElPokemon = (pokemon) => {
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    verPokemon(pokemon, (error, data) => {
        if (data) {
            pokemonImage.style.display = 'block';
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            input.value = '';
            BuscarPokemon = data.id;
        } else {
            pokemonImage.style.display = 'none';
            pokemonName.innerHTML = "No se encontro el pokemon";
            pokemonNumber.innerHTML = '';
        }
    });
};

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    ElPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click',()=>{
    if (BuscarPokemon >1){
        BuscarPokemon -= 1;
        ElPokemon(BuscarPokemon);
    }
});

buttonNext.addEventListener('click',()=>{
    
        BuscarPokemon += 1;
        ElPokemon(BuscarPokemon);
    
});

ElPokemon(BuscarPokemon);