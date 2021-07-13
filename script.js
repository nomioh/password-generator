// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Variables used to generate random password

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "0123456789";
const specialChar = "!@#$%^&*(),._-+={}[]/~<>";

// Functions for generating random characters
function getRandomLower() {
  return lowerChar.charAt(Math.ceil(Math.random() * lowerChar.length));
}

function getRandomUpper() {
  return upperChar.charAt(Math.ceil(Math.random() * upperChar.length));
}

function getRandomNumber() {
  return numberChar.charAt(Math.ceil(Math.random() * numberChar.length));
}
function getRandomSymbol() {
  return specialChar.charAt(Math.ceil(Math.random() * specialChar.length));
}

function generatePassword() {
  let passLength = prompt(
    "Choose a password with at least 8 characters and no more than 128 characters."
  );

  // Validates user input

  if (
    parseInt(passLength) < 8 ||
    parseInt(passLength) > 128 ||
    isNaN(passLength) ||
    passLength === "null" ||
    passLength === null ||
    passLength.trim() === ""
  ) {
    alert("Password must be longer than 6 characters and shorter than 128.");
  } else {
    // true or false questions/options for user
    let isLower = confirm(
      "Would you like to include LOWERCASE characters in your password?"
    );
    let isUpper = confirm(
      "Would you like to include UPPERCASe characters in your password?"
    );
    let isNumber = confirm(
      "Would you like to include numerical characters in your password?"
    );
    let isSpecialChar = confirm(
      "Would you like to include special characters in your password?"
    );

    return processPasswordGenerator(
      passLength,
      isLower,
      isUpper,
      isNumber,
      isSpecialChar
    );
  }
}

// Creates random passcode based on user's input/choices

function processPasswordGenerator(length, lower, upper, number, special) {
  let tempPass = "";

  for (let counter = 1; counter <= length; counter++) {
    tempPass += lower ? getRandomLower() : "";
    tempPass += upper ? getRandomUpper() : "";
    tempPass += number ? getRandomNumber() : "";
    tempPass += special ? getRandomSpecial() : "";
  }

  return tempPass
    .slice(0, length)
    .split("")
    .sort(() => {
      Math.random() * -0.5;
    })
    .join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
