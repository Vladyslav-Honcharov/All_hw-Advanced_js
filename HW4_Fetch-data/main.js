const films = fetch("https://ajax.test-danit.com/api/swapi/films");
const wrapper = document.querySelector(".wrapper");
films
  .then((data) => data.json())
  .then((dataList) => {
    dataList.forEach((film) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <h2>Episode number: ${film.episodeId}</h2>
        <h3 class = "name">Film name: ${film.name}</h3>
        <p>openingCrawl: ${film.openingCrawl}</p>
 
        <div class="load"><div>
       
        `;
      wrapper.append(card);

      Promise.all(
        film.characters.map((characterAPI) =>
          fetch(characterAPI).then((response) => response.json())
        )
      ).then((list) => {
        const characterList = document.createElement("ul");

        list.forEach((character) => {
          const characterElement = document.createElement("li");
          characterElement.textContent = character.name;
          characterList.appendChild(characterElement);
        });
        const load = document.querySelector(".load");
        card.appendChild(characterList);
        load.remove();
      });
    });
  });
