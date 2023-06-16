// async function getDataFromJson() {
//     const response = await fetch('./info.json');
//     console.log('response: ', response);
// };

/**
 * Data from JSON
 */
const getDataFromJson = async() => {
    // 1. leer el archivo info.json con ayuda de fetch y controlando la asincronia con await
    const response = await fetch('./info.json');
    // 2. obtener del response con la funciion .json la data (pokemons)
    const pokemons =  await response.json();
    console.log('pokemons: ', pokemons);
};

// getDataFromJson();

/**
 * Data from API
 */
const getDataFromApi = async() => {
    // 1. leer el archivo info.json con ayuda de fetch y controlando la asincronia con await
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    // 2. obtener del response con la funciion .json la data (pokemons)
    const pokemons =  await response.json();
    console.log('pokemons: ', pokemons);
    console.log('pokemons: ', pokemons.results);

    for (iterador of pokemons.results) {
        const response = await fetch(iterador.url);
        console.log('response: ', response);
        const pokemon = await response.json();
        console.log('pokemon: ', pokemon.name, pokemon.sprites.front_default);
        
        // codigo de pinta la tarjetita de c/pokemon
        const imgContainer = document.querySelector('#container-images');
        console.log(imgContainer)
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', pokemon.sprites.front_default);
        imgContainer.appendChild(imgElement);

    }
    
};

getDataFromApi();
