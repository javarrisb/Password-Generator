// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChar = "*!@$%^&?_-=+";
var charList = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




function generatePassword() {

  var newPassword = "";

  function getLength() {
    var length = Number(prompt("Choose the length of characters for each password. minimum 8, maximum 128"));
    if (length < 8 || length > 128) {
      alert("Invalid attempt. Try again");
      length = getLength();
    }
    return length;
  }
  var promptLength = getLength();

  var promptLower = confirm("Include lowercase letters (a-z)?");


  var promptUpper = confirm("Include upercase letters (A-Z)?");


  var promptNum = confirm("Include numbers (0-9)?");

  var promptSpec = confirm("Include special characters (!#$%&*)? ");

  if (promptLower === true) {
    charList += lowerCase
  }

  if (promptUpper === true) {
    charList += upperCase
  }

  if (promptNum === true) {
    charList += numeric
  }

  if (promptSpec === true) {
    charList += specialChar
  }

  for (var i = 0; i < promptLength; i++) {
    newPassword += charList.charAt(Math.floor(Math.random() * charList.length));
  }

  return newPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
