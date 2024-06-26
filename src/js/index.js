// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const labelElement = document.getElementById('label');
const rangeElement = document.getElementById('range');
const buttonElement = document.getElementById('generator');
const finishedPassword = document.getElementById('password');

const characterAvailable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const lengthValue = () => {
  labelElement.textContent = `LENGTH: ${rangeElement.value}`;
};

rangeElement.addEventListener('input', lengthValue);

const password = () => {
  let randomPassword = '';
  for (let i = 0; i < rangeElement.value; i++) {
    const randomNumber = Math.floor(Math.random() * characterAvailable.length);
    randomPassword += characterAvailable.charAt(randomNumber);
  }
  finishedPassword.value = randomPassword;
};

buttonElement.addEventListener('click', password);
