const divGamesCards = document.querySelector('.div-games');
const gamesList = [
  {
    name: "Diablo II: Resurrected",
    category: "RPG de ação",
    img: "diablo-dois",
    alt: "imagem capa de diablo dois"
  },
  {
    name: "Overwatch",
    category: "Ação em equipe",
    img: "overwatch",
    alt: "imagem capa de overwatch"
  },
  {
    name: "Overwatch 2",
    category: "Ação em equipe",
    img: "overwatch-dois",
    alt: "imagem capa de overwatch dois"
  },
  {
    name: "World War Craft Classic",
    category: "RPG multijogadores",
    img: "worldwarcraft-mastery",
    alt: "imagem capa de worl war craft classico"
  },
  {
    name: "HearthStone",
    category: "Jogo de cardes estratégicos",
    img: "hearthstone",
    alt: "imagem capa de hearth stone"
  },
  {
    name: "Heroes of Storm",
    category: "RPG de ação",
    img: "heroes-storm",
    alt: "imagem capa de Heroes of Storm"
  },
  {
    name: "War Craft III Reforged",
    category: "RPG de ação",
    img: "warcraft-reforged",
    alt: "imagem capa de war craft reforged"
  },
  {
    name: "Diablo IV",
    category: "RPG de ação",
    img: "diablo-quatro",
    alt: "imagem capa de diablo IV (quatro)"
  },
  {
    name: "Diablo III",
    category: "RPG de ação",
    img: "diablo-tres",
    alt: "imagem capa de diablo III (três)"
  },
  {
    name: "StarCraft II",
    category: "RPG de ação",
    img: "starcraft-dois",
    alt: "imagem capa de StarCraft II (dois)"
  },
  {
    name: "StarCraft Remastered",
    category: "RPG de ação",
    img: "starcraft",
    alt: "imagem capa de StarCraft Remastered"
  },
];

function showGames() {
  divGamesCards.innerHTML = ""
  gamesList.forEach(game => {
    divGamesCards.insertAdjacentHTML("beforeend", `
      <div class="card-game">
        <img
          class="game-image"
          src="./images/games/${game.img}.png"
          alt="${game.alt}"
        />
        <h4 class="game-title">${game.name}</h4>
        <p class="game-category">${game.category}</p>
      </div>
    `)
  })

  divGamesCards.insertAdjacentHTML('beforeend', `
    <div class="card-default">
      <img class="-image" 
        src="images/generic/blizzard-logo.png" 
        alt="logo da empresa blizzard"
      />
      <span class="span-icons">
        <img src="images/icons/expandir.svg" alt="icone de expandir área"/>
        <p>Veja todos os Jogos</p>
      </span>
    </div>
  `)
};

showGames();