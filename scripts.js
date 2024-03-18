document.addEventListener('DOMContentLoaded', function() {
    fetchPokemon();
});

function fetchPokemon() {

    const pokemonId = Math.floor(Math.random() * 898) + 1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => console.error('Error al obtener datos del Pokémon:', error));
}

function displayPokemon(pokemon) {
    const imageElement = document.getElementById('pokemon-image');
    const nameElement = document.getElementById('pokemon-name');
    const hpElement = document.getElementById('pokemon-hp');
    const attackElement = document.getElementById('pokemon-attack');
    const defenseElement = document.getElementById('pokemon-defense');
    const specialAttackElement = document.getElementById('pokemon-special-attack');
    const specialDefenseElement = document.getElementById('pokemon-special-defense');
    const speedElement = document.getElementById('pokemon-speed');
    const abilitiesElement = document.getElementById('pokemon-abilities');


    imageElement.src = pokemon.sprites.front_default;
    nameElement.textContent = pokemon.name.toUpperCase();
    hpElement.textContent = `HP: ${pokemon.stats[0].base_stat}`;
    attackElement.textContent = `Ataque: ${pokemon.stats[1].base_stat}`;
    defenseElement.textContent = `Defensa: ${pokemon.stats[2].base_stat}`;
    specialAttackElement.textContent = `Ataque Especial: ${pokemon.stats[3].base_stat}`;
    specialDefenseElement.textContent = `Defensa Especial: ${pokemon.stats[4].base_stat}`;
    speedElement.textContent = `Velocidad: ${pokemon.stats[5].base_stat}`;

    abilitiesElement.innerHTML = '';
    pokemon.abilities.forEach(ability => {
        let abilityElement = document.createElement('li');
        abilityElement.textContent = ability.ability.name;
        abilitiesElement.appendChild(abilityElement);
    });
}