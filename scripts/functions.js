// Create a function to fetch Pokémon data from the PokéAPI
async function fetchPokémonData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export {fetchPokémonData};