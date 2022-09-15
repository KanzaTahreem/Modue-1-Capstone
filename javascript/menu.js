const barMenu = document.querySelector('.bar-menu');
const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.close');
const mainMenu = document.querySelector('.main-menu');

barMenu.addEventListener('click', () => {
  popUp.classList.remove('hidden');
});

close.addEventListener('click', () => {
  popUp.classList.remove('hidden');
});

mainMenu.addEventListener('click', () => {
  popUp.classList.add('hidden');
});