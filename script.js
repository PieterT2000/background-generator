// DOM selectors
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');

// set gradient function
const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
	css.textContent = body.style.background + ';';
};

//eventlistener for color inputs
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
