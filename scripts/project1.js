import {fetchPokémonData} from "./functions.js"

// Global variables
const pokémons = document.querySelector("#pokémons");
const pokémonList = [];

//Creating the pokémon logo
const logoElement = document.querySelector("#logo");
const imgElement = document.createElement("img");
imgElement.src = "/images/pokémon.png";
imgElement.alt = "Pokémon Logo";
logoElement.appendChild(imgElement);

// Create a function to fetch a list of Pokémon from the PokéAPI
async function fetchPokémonList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();
  pokémonList.push(...data.results);

  // Fetch data for each Pokémon
  await Promise.all(pokémonList.map(async (pokemon) => {
    const data = await fetchPokémonData(pokemon.url);
    pokemon.data = data;
  }));

  // Display Pokémon
  displayPokémons(pokémonList);
}

// Display the Pokémon in cards
function displayPokémons(pokémonList) {
  pokémonList.forEach(pokemon => {
    const pokémonCard = document.createElement("div");
    pokémonCard.className = "pokemon-card";

    const pokémonName = document.createElement("h3");
    pokémonName.textContent = pokemon.data.name.toUpperCase();

    const pokémonTypes = document.createElement("p");
    const types = pokemon.data.types.map(type => type.type.name).join(', ');
    pokémonTypes.innerHTML = `<u>Types</u>: ${types}`;

    const pokémonImg = document.createElement("img");
    pokémonImg.src = pokemon.data.sprites.front_default;
    pokémonImg.alt = pokemon.data.name;

    pokémonCard.appendChild(pokémonName);
    pokémonCard.appendChild(pokémonTypes);
    pokémonCard.appendChild(pokémonImg);

    pokémons.appendChild(pokémonCard);
  });
}

// Create a function to sort Pokémon by their types
function sortPokémonByType(type) {
    const sortedPokémon = pokémonList.filter(pokemon =>
      pokemon.data.types.some(t => t.type.name === type)
    );

    pokémons.innerHTML = ''; // Clear the container

    displayPokémons(sortedPokémon);
  }

// Create a function to handle the selection change
function handleSelectionChange() {
    const selectedType = document.querySelector("#filterBy").value;
    if (selectedType === "") {
      // If "All Types" is selected, display all Pokémon
      displayPokémons(pokémonList);
    } else {
      sortPokémonByType(selectedType);
    }
  }

// Event listener for the selection
document.querySelector("#filterBy").addEventListener("change", handleSelectionChange);

// Fetch Pokémon data and display them
fetchPokémonList();
console.log(pokémonList);