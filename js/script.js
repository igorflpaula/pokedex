const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

const typeOne = document.querySelector('.btn-type-one');
const typeTwo = document.querySelector('.btn-type-two');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if(APIResponse.status == 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data && data.id < 650){
        input.value = '';
        searchPokemon = data.id;
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        typeOne.innerHTML = data['types']['0']['type']['name'];

        switch(data['types']['0']['type']['name']){
            case 'bug':
                typeOne.style.backgroundColor = '#91c12f';
                break;
            case 'dark':
                typeOne.style.backgroundColor = '#5a5465';
                break;
            case 'dragon':
                typeOne.style.backgroundColor = '#0b6dc3';
                break;
            case 'electric':
                typeOne.style.backgroundColor = '#f4d23c';
                break;
            case 'fairy':
                typeOne.style.backgroundColor = '#ec8fe6';
                break;
            case 'fighting':
                typeOne.style.backgroundColor = '#ce416b';
                break;
            case 'fire':
                typeOne.style.backgroundColor = '#ff9d55';
                break;
            case 'flying':
                typeOne.style.backgroundColor = '#89aae3';
                break;
            case 'ghost':
                typeOne.style.backgroundColor = '#5269ad';
                break;
            case 'grass':
                typeOne.style.backgroundColor = '#63bc5a';
                break;
            case 'ground':
                typeOne.style.backgroundColor = '#d97845';
                break;
            case 'ice':
                typeOne.style.backgroundColor = '#73cec0';
                break;
            case 'normal':
                typeOne.style.backgroundColor = '#919aa2';
                break;
            case 'poison':
                typeOne.style.backgroundColor = '#b567ce';
                break;
            case 'psychic':
                typeOne.style.backgroundColor = '#fa7179';
                break;
            case 'rock':
                typeOne.style.backgroundColor = '#c5b78c';
                break;
            case 'steel':
                typeOne.style.backgroundColor = '#5a8ea2';
                break;
            case 'water':
                typeOne.style.backgroundColor = '#5090d6';
                break;
        }

        switch(data['types']['1']['type']['name']){
            case 'bug':
                typeTwo.style.backgroundColor = '#91c12f';
                break;
            case 'dark':
                typeTwo.style.backgroundColor = '#5a5465';
                break;
            case 'dragon':
                typeTwo.style.backgroundColor = '#0b6dc3';
                break;
            case 'electric':
                typeTwo.style.backgroundColor = '#f4d23c';
                break;
            case 'fairy':
                typeTwo.style.backgroundColor = '#ec8fe6';
                break;
            case 'fighting':
                typeTwo.style.backgroundColor = '#ce416b';
                break;
            case 'fire':
                typeTwo.style.backgroundColor = '#ff9d55';
                break;
            case 'flying':
                typeTwo.style.backgroundColor = '#89aae3';
                break;
            case 'ghost':
                typeTwo.style.backgroundColor = '#5269ad';
                break;
            case 'grass':
                typeTwo.style.backgroundColor = '#63bc5a';
                break;
            case 'ground':
                typeTwo.style.backgroundColor = '#d97845';
                break;
            case 'ice':
                typeTwo.style.backgroundColor = '#73cec0';
                break;
            case 'normal':
                typeTwo.style.backgroundColor = '#919aa2';
                break;
            case 'poison':
                typeTwo.style.backgroundColor = '#b567ce';
                break;
            case 'psychic':
                typeTwo.style.backgroundColor = '#fa7179';
                break;
            case 'rock':
                typeTwo.style.backgroundColor = '#c5b78c';
                break;
            case 'steel':
                typeTwo.style.backgroundColor = '#5a8ea2';
                break;
            case 'water':
                typeTwo.style.backgroundColor = '#5090d6';
                break;
        }
        
        if(data['types']['1']){
            typeTwo.innerHTML = data['types']['1']['type']['name'];
        }else{
            typeTwo.innerHTML = '-';
        }

    }else{
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not found :c';
        pokemonNumber.innerHTML = '';
        typeOne.style.backgroundColor = '#444';
        typeOne.innerHTML = '-';
        typeTwo.style.backgroundColor = '#444';
        typeTwo.innerHTML = '-';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
})

btnPrev.addEventListener('click', () => {
    if(searchPokemon > 1){
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
})

btnNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);

