// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~"
];

// let characters = upperCase.concat(lowerCase, numerals, specialChars);
//console.log(characters);

let copyBtn = document.getElementById("copyMe");

let howLong = document.getElementById("howLong");
let chkUpperCase = document.getElementById("chkUpperCase");
let chkLowerCase = document.getElementById("chkLowerCase");
let chkNumbers = document.getElementById("chkNumbers");
let chkSpecialChars = document.getElementById("chkSpecialChars");

let inputLength = document.getElementById("howLong");
let notLongEnough = "Password doesn't meet requirments"
let checkSomething = "Nothing was selected"

let passwordText = document.querySelector("#password");

console.log(inputLength);

function generatePassword() {
  let passLength = parseInt(inputLength.value);
  console.log(passLength);

  let characters = "";

  if (chkUpperCase.checked) {
    characters += upperCase.join("");
    // console.log(characters);
  }

  if (chkLowerCase.checked) {
    characters += lowerCase.join("");
  }
  if (chkNumbers.checked) {
    characters += numerals.join("");
  }
  if (chkSpecialChars.checked) {
    characters += specialChars.join("");
  }
  if (!characters) {
    passwordText.value = checkSomething;
    return checkSomething;
  }
  if (passLength > 128 || passLength < 8) {
    passwordText.value = notLongEnough
    return notLongEnough;
  }
  console.log(characters);
  let generatePSD = "";
  for (i = 0; i < passLength; i++) {
    console.log(characters.length);

    let randPos = Math.floor(Math.random() * (characters.length - 1));
    console.log(randPos);
    generatePSD += characters.charAt(randPos);
    console.log(generatePSD);
  }
  return generatePSD;
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


  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();

  return password;
}

function copyToClipboard() {
  // BONUS
  let copyTo = document.getElementById("copyMe");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
