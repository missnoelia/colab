async function getdata() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await response.json();

  // console.log(json);

  const pokemonList = document.getElementById("pokemons");
  json.results.forEach(async (pokemon) => {
    const pokemonItem = document.createElement("div");

    const pokemonResponse = await fetch(pokemon.url);
    const pokemonJson = await pokemonResponse.json();
    //console.log(pokemonJson);

    pokemonItem.innerHTML = `
    <p>${pokemon.name}</p>
    <img src=${pokemonJson.sprites.front_default}>
    `;
    pokemonJson.types.forEach((typeItem) => {
      pokemonItem.innerHTML += `<p>${typeItem.type.name}</p>`;
    });
    pokemonList.appendChild(pokemonItem);
  });
}

getdata();
