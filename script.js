// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array for computer to collect user input
var userChoice = []

// Array of lower case letters choices for computer to pick from
var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Array of upper case letters choices for computer to pick from
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Array of number choices for computer to pick from
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Array of special characters for computer to pick from
var special_characters = ['~','!','@','#','$','%','^','&','*','(',')','_','-','[',']','{','}',';',':','.','/','<','>','?'];

// Write password to the #password input
function writePassword() {
  var allPrompts = options();
  console.log(allPrompts)
  var passwordText = document.querySelector("#password");

  if(allPrompts) {
  var password = generatePassword();
   passwordText.value = password;
  } else{
    passwordText.value = "";
  }
}

// Randomize user selected characters
function generatePassword() {
  var key = "";
  for (var i = 0; i <length; i++) {
    var randomNumber = Math.floor(Math.random() * userChoice.length);
    key = key + userChoice[randomNumber];
  }
  return key;
}

// When the user presses the generate button on screen, computer will ask a series of questions to figure out how to generate the custom password
function options() {
  userChoice = [];

  length = prompt("How many characters would you like for your custom password? (8-128 characters)");

  if(isNaN(length) || length < 8 || length > 128) {
    alert("Character length must be a number between 8-128. Please try again.");
    return false;
  }
  if(confirm("Would you like to use numbers in your custom password?")) {
    userChoice = userChoice.concat(numbers);
  }
  if(confirm("Would you like to use lower case letters in your custom password?")) {
    userChoice = userChoice.concat(lowercaseLetters);
  }
  if(confirm("Would you like to use upper case letters in your custom password?")) {
    userChoice = userChoice.concat(uppercaseLetters);
  }
  if(confirm("Would you like to use special characters in your custom password?")) {
    userChoice = userChoice.concat(special_characters);
  } 
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);