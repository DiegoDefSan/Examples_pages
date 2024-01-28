const fetch = require('cross-fetch');

const fetchData = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data = await res.json();

        const pokemon = {
            name: data.name,
            ps:data.stats[0].base_stat,
            tipo: getTypes(data),
            abilities: getAbilities(data),
            height: data.height,
            weight: data.weight
        }
        console.log(pokemon);
        printCard(pokemon);
    }
    catch (error) {
        console.log(error);
    }
}

const printCard = (pokemon) => {
    var fondo = document.getElementById('c-in');

    var tag = document.getElementById('name');
    var ps = document.getElementById('ps');
    var types = document.getElementById('tipos');
    var h_span = document.getElementById('height-span');
    var w_span = document.getElementById('weight-span');

    tag.innerHTML=capitalize(pokemon.name) ;
    ps.innerHTML=`PS ${pokemon.ps}`;
    h_span.innerHTML = 'pokemon.height';
    w_span.innerHTML = pokemon.weight;
    types.innerHTML = pokemon.tipo.map(function(e) {
        return capitalize(e);
    }).join(' / ');
    setBGImage(pokemon, fondo);
}

const getTypes = (data) => {
    let arr=[];
    let dataTypes = data.types;
    for (let i=0; i<dataTypes.length; i++) {
        arr.push(dataTypes[i].type.name);
    }
    return arr;
}

const getAbilities = (data) => {
    let arr=[];
    let dataAbi = data.abilities;
    for (let i=0; i<dataAbi.length; i++) {
        arr.push(dataAbi[i].ability.name);
    }
    return arr;
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function setBGImage (p1, fondo) {
    if (p1.tipo[0] == 'plant') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(141, 175, 130), rgb(175, 207, 164), rgb(9, 126, 79), rgb(12, 155, 98))";
    }
    else if (p1.tipo[0]=='fire') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(240, 60, 24),  rgb(248, 177, 119),rgb(255, 122, 63), rgb(233, 139, 65))";
    }
    else if (p1.tipo[0]=='water') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(54, 116, 176), rgb(113, 167, 225), rgb(71, 125, 187) , rgb(178, 206, 243))";
    }
    else if (p1.tipo[0]=='normal') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(161, 161, 161),  rgb(210,207,198),rgb(205,199,193), rgb(225, 226, 225))";
    }
    else if (p1.tipo[0]=='electric') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(252, 205, 37), rgb(224, 218, 147), rgb(244,228,116), rgb(241,223,74))";
    }
    else if (p1.tipo[0]=='ice') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(15, 157, 212), rgb(115,199,238),rgb(40, 178, 233), rgb(94, 190, 231), rgb(115,199,238), rgb(15, 157, 212))";
    }
    else if (p1.tipo[0]=='fighting') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(205,120,51), rgb(214,132,49),rgb(231,165,41),rgb(215,122,49),rgb(205,120,51))";
    }
    else if (p1.tipo[0]=='poison'||p1.tipo[0]=='ghost') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(106, 64, 151),rgb(208,154,197),rgb(148,103,172),rgb(180,122,180))";
    }
    else if (p1.tipo[0]=='ground') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(206,119,67),rgb(237,179,118),rgb(209,122,58),rgb(226,154,100))";
    }
    else if (p1.tipo[0]=='psychic') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(179, 83, 163),rgb(236,172,193),rgb(220,130,186),rgb(228,131,173), rgb(179, 83, 163))";
    }
    else if (p1.tipo[0]=='bug') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(120,184,82),rgb(220,231,66),rgb(172,214,74),rgb(165,198,75))";
    }
    else if (p1.tipo[0]=='rock') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(160,81,49),rgb(187,116,67),rgb(220,177,116),rgb(226,205,178))";
    }
    else if (p1.tipo[0]=='dragon') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(142,127,59),rgb(111,103,54),rgb(232,207,57),rgb(215,167,59),rgb(234,203,57))";
    }
    else if (p1.tipo[0]=='fairy') {
        fondo.style.backgroundImage = "linear-gradient(to bottom right, rgb(122, 45, 54),rgb(218,58,112),rgb(218,58,112),rgb(236,114,147))";
    }
}

fetchData()

/*console.log('Hi');
const request= require('request');


function getObjPokemon (id) {
    request.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
        (error, response, body) => {
            let pokemon = JSON.parse(body);
            let name = pokemon.name;
            let ps = pokemon.stats[0].base_stat;
            let types = getTypes(pokemon);
            let abilities = getAttacks(pokemon);

            let obj = {
                name: name,
                ps: ps,
                tipo: types,
                abilities: abilities
            }

            console.log(obj);
        }
    )
}

function getTypes(JSONfile) {
    let arr = [];
    for (let i=0; i<JSONfile.types.length; i++) {
        arr.push(JSONfile.types[i].type.name);
    }
    return arr;
}

function getAttacks (JSONfile) {
    let arr=[];
    let file = JSONfile.abilities;
    for (let i=0; i<file.length; i++) {
        arr.push(file[i].ability.name);
    }
    return arr;
}

console.log(getObjPokemon(1))
*/
