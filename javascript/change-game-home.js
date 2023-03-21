const itemsUl = document.querySelectorAll('.icons-item');
const homeBackground = document.querySelector('.section-home');

const infoGamesHome = [
  {
    urlBackground: './images/backgrounds/diablo-quatro.png',
    title: 'Retorne à escuridão com o game Diablo IV',
    paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    button: 'Jogue Agora',
    positionBackground: 38,
  },
  {
    urlBackground: './images/backgrounds/hearthstone-home.png',
    title: 'Novo pacote de expansão de Hearthstone',
    paragraph: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    button: 'Reserve agora na pré-venda',
    positionBackground: 65,
  },
  {
    urlBackground: './images/backgrounds/worldwarcraft-shadow-home.png',
    title: 'Desbrave as Terras Sombrias em Shadowlands! ',
    paragraph: 'O que jaz além do mundo que você conhece?',
    button: 'Reserve agora na pré-venda',
    positionBackground: 65,
  },
  
];

function changeBackground(index) {
  const postitonX = infoGamesHome[index].positionBackground
  homeBackground.style.backgroundImage = `url(${infoGamesHome[index].urlBackground})`;
  homeBackground.style.backgroundPosition = `${postitonX}% 0%`;
};

function changeTitle(index) {
  const tilteHome = homeBackground.querySelector('.main-title');
  tilteHome.textContent = infoGamesHome[index].title;
};

function cahngeParagraph(index) {
  const paragraphHome = homeBackground.querySelector('.main-paragraph');
  paragraphHome.textContent = infoGamesHome[index].paragraph;
};

function changeButton(index) {
  const buttonHome = homeBackground.querySelector('.game-home');
  buttonHome.textContent = infoGamesHome[index].button;
};

function changeFocusItem(item) {
  itemsUl.forEach(item => {
    item.classList.remove('-active')
  })

  item.classList.add('-active')
};

function changeContentHome(event) {
  const itemClicked = event.target.closest('.icons-item');
  const index = itemClicked.id;

  changeBackground(index)
  changeTitle(index)
  cahngeParagraph(index)
  changeButton(index)
  changeFocusItem(itemClicked)
};

itemsUl.forEach(element => {
  element.addEventListener('click', changeContentHome)
});