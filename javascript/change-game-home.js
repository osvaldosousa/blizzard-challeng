const itemsUl = document.querySelectorAll('.icons-item');
const homeBackground = document.querySelector('.-background');

const infoGamesHome = [
  {
    urlBackground: './images/backgrounds/banner-mulher-grande.png',
    title: 'Retorne à escuridão com o game Diablo IV',
    paragraph: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    button: 'Jogue Agora'
  },
  {
    urlBackground: './images/backgrounds/hearthstone-home.png',
    title: 'Novo pacote de expansão de Hearthstone',
    paragraph: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    button: 'Reserve agora na pré-venda'
  },
  {
    urlBackground: './images/backgrounds/worldwarcraft-shadow-home.png',
    title: 'Desbrave as Terras Sombrias em Shadowlands! ',
    paragraph: 'O que jaz além do mundo que você conhece?',
    button: 'Reserve agora na pré-venda'
  },
  
];

function changeBackground(index) {
  homeBackground.style.backgroundImage = `url(${infoGamesHome[index].urlBackground})`;
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
  const buttonHome = homeBackground.querySelector('.main-button');
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