// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

let length = 0;
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "<", ">", "/"];
let masterArray = [];

function error() {
  alert("Invalid Response. Please try again.");
  generatePassword();
}

function random() {
  Math.floor(Math.random() * masterArray.length - 1) + 1
}

function generatePassword() {
  let passwordLength = prompt("Please enter the number of characters you want for you new password. It may be between 8 and 128 characters.");

  if (passwordLength === null) { return "Your Secure Password"; } else if (passwordLength < 8 || passwordLength > 128) {
    return error();
  }

  let lowerCaseConfirm = window.confirm("Would you like to include lower-case letters?");
  if (lowerCaseConfirm === true) {
    for (i = 0; i < 128; i++) {
      masterArray.push(lowerCase[(Math.floor(Math.random() * lowerCase.length) + 1)]);
    }
  }

  let upperCaseConfirm = window.confirm("Would you like to include upper-case letters?");
  if (upperCaseConfirm === true) {
    for (i = 0; i < 128; i++) {
      masterArray.push(upperCase[(Math.floor(Math.random() * upperCase.length) + 1)]);
    }
  }

  let numbersConfirm = window.confirm("Would you like to include numbers?");
  if (numbersConfirm === true) {
    for (i = 0; i < 128; i++) {
      masterArray.push(numbers[(Math.floor(Math.random() * numbers.length) + 1)]);
    }
  }

  let specialCharsConfirm = window.confirm("Would you like to include special characters?")
  if (specialCharsConfirm === true) {
    for (i = 0; i < 128; i++) {
      masterArray.push(specialChars[(Math.floor(Math.random() * specialChars.length) + 1)]);
    }
  }

  masterArray.sort(() => Math.random() - 0.5);
  return masterArray.slice(0, [passwordLength]).join("");

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  masterArray.splice(0);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
