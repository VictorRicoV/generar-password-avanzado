// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const labelElement = document.getElementById("label");
const rangeElement = document.getElementById("range");
const buttonElement = document.getElementById("generator");
const finishedPassword = document.getElementById("password");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

//const characterAvailable = "";

const lengthValue = () => {
  labelElement.textContent = `LENGTH: ${rangeElement.value}`;
};

rangeElement.addEventListener("input", lengthValue);

const password = () => {
  let selectedCharacters = "";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-={}[]:;<>,.?/";

  if (uppercaseCheckbox.checked) {
    selectedCharacters += uppercase;
  }
  if (lowercaseCheckbox.checked) {
    selectedCharacters += lowercase;
  }
  if (numbersCheckbox.checked) {
    selectedCharacters += numbers;
  }
  if (symbolsCheckbox.checked) {
    selectedCharacters += symbols;
  }

  let randomPassword = "";
  for (let i = 0; i < rangeElement.value; i++) {
    const randomNumber = Math.floor(Math.random() * selectedCharacters.length);
    randomPassword += selectedCharacters.charAt(randomNumber);
  }
  finishedPassword.value = randomPassword;
};

buttonElement.addEventListener("click", password);
