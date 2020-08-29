const setDarkMode = (state) => {
  const body = document.querySelector('body');
  const main = document.querySelector('.main-block');
  const btn = document.querySelector('.menu__dark-mode-btn');

  if (state) {
    body.classList.add('body--dark-mode');
    main.classList.add('main-block--dark-mode');
    btn.classList.add('menu__dark-mode-btn--dark-mode');
    setState(true);
  } else {
    body.classList.remove('body--dark-mode');
    main.classList.remove('main-block--dark-mode');
    btn.classList.remove('menu__dark-mode-btn--dark-mode');
    setState(false);
  }  
}

setState = (state) => {
  localStorage.setItem('felipegs-dark-mode', state);
}

getState = () => {
  return localStorage.getItem('felipegs-dark-mode');
}


const darkModeButton = document.querySelector('.menu__dark-mode-btn');
darkModeButton.addEventListener('click', () => {
  const state = JSON.parse(getState());
  setDarkMode(!state);
});

document.addEventListener('DOMContentLoaded', () => {
  const state = JSON.parse(getState());
  setDarkMode(state);
});

