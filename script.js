// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of letter choices for computer to pick from
var letters = ["abcdefghijklmnopqrstuvwxyz"].split("")

// Array of number choices for computer to pick from
var numbers = ["1234567890"].split("")

// Array of special characters for computer to pick from
var special_characters = ["~!@#$%^&*()_`-[]{};:,./<>?"].split("")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // When the user presses the generate button on screen, computer will ask a series of questions to figure out how to generate the custom password

    var userChoice = generateBtn.prompt
    ("How many characters would you like for your custom password?")

    input
    
    ("Would you like to use lowercase letters?")

  if(!userChoice) {
    return; else{
        letters.toLowerCase()
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

