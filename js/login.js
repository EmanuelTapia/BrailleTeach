// Hacer la solicitud a la API
fetch("http://localhost:8080/abecedario", {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .then(response => response.json())
  .then(data => {
    const pokemonList = document.getElementById("pokemon-list");

    // Recorrer los resultados y agregarlos a la lista
    data.forEach(pokemon => {
      const listItem = document.createElement("li");
      listItem.textContent = pokemon.letra;
      pokemonList.appendChild(listItem);
    });
  })
  .catch(error => console.error("Error al obtener los datos:", error));
