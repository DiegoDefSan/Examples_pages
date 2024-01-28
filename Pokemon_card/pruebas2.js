const fetch = require('cross-fetch')

const fetchData = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data = await res.json();

        const pokemon = {
            name: data.name,
            height: data.height,
            weight: data.weight
        }
        console.log(pokemon)
        printCard(pokemon);
    }
    catch (error) {
        console.log(error);
    }
}

const printCard = (pokemon) => {
    const setName = document.getElementById('name');
    const setHe = document.getElementById('height');
    const setWe = document.getElementById('weight');

    setName.innerHTML = pokemon.name;
    setHe.innerHTML = pokemon.height;
    setWe.innerHTML = pokemon.weight;
}

fetchData()