// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

// let characters = upperCase.concat(lowerCase, numerals, specialChars);
//console.log(characters);

let copyBtn = document.getElementById("copyMe");

let howLong = document.getElementById("howLong");
let chkUpperCase = document.getElementById("chkUpperCase");
let chkLowerCase = document.getElementById("chkLowerCase");
let chkNumbers = document.getElementById("chkNumbers");
let chkSpecialChars = document.getElementById("chkSpecialChars");


let inputLength = document.getElementById("howLong");

console.log(inputLength);


function generatePassword() { 
  
  let passLength = inputLength.value;
  console.log(passLength);

  let characters = "";


  if (chkUpperCase.checked) {
    characters += upperCase;
    console.log(characters);
  }

  if (chkLowerCase.checked) {
    characters += lowerCase;
  }
  if (chkNumbers.checked) {
    characters += numerals;
  }
  if (chkSpecialChars.checked) {
    characters += specialChars;
  }
  for (i=0; i < passLength; i++) {
    let randPos = Math.floor(Math.random() * characters.length);
    console.log (randPos);
    }
  }
    // console.log(generatePassword);

 

// This is not currently working, you need to fix it

// if (document.getElementsByName("useMe").checked) {
//   console.log("checked");
// }
// else {
//   console.log ("check a box")
// }

// Write password to the #password input
function writePassword() {
  let password = generatePassword();

  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();

  return password;
}

function copyToClipboard() {
  // BONUS 
  let copyTo = document.getElementById("copyMe");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
