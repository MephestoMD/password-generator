// Assignment Code
var generateBtn = document.querySelector("#generate"); //the <button> element



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let lowCaseString = "abcdefghijklmnopqrstuvwxyz";
let lowCase = Array.from(lowCaseString);

let upCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upCase = Array.from(upCaseString);

let numString = "1234567890";
let num = Array.from(numString);

let specString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
let spec = Array.from(specString);


