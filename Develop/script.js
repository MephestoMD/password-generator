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

// Assign possible characters to a string and then create arrays to hold each set of characters
let lowCaseString = "abcdefghijklmnopqrstuvwxyz";
let lowCase = Array.from(lowCaseString);

let upCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let upCase = Array.from(upCaseString);

let numString = "1234567890";
let num = Array.from(numString);

let specString = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~'";
let spec = Array.from(specString);


function generatePassword() {

  var charSet = []; //Define an empty array to hold the final array of possible characters
  var numChars = prompt("How many characters long do you want your password to be? (8-128 characers, please)"); // Prompt user to input number of characters for password and store that number in a variable

  while (numChars > 128 || numChars < 8) {  // Ensure that the number selected fits the specified range and re-prompt if necessary
    alert("Please enter a number between 8-128");
    generatePassword();
  }

  // Prompt user for password criteria and create an array incrementally to hold possible characters for password
  
  while (charSet.length === 0) { // Handle the possibility that the user selects no criteria with a loop
  if (confirm("Do you want the password to include upper case letters?")) {
    charSet = charSet.concat(upCase);
  } 
  if(confirm("Do you want the password to include lower case letters?")) {
    charSet = charSet.concat(lowCase);
  }
  if (confirm("Do you want the password to include numbers?")) {
    charSet = charSet.concat(num);
  }  
 if (confirm("Do you want the password to include special characters?")) {
   charSet = charSet.concat(spec);
 }
  //Alert the user that they selected zero criteria
  if (charSet.length === 0) {
    alert("You must select at least one criterion for password generation! Try again."); 
  }
}


let password = []; // Define an empty array to hold the password as it is generated

// Create a for loop to iterate over the number of characters and incrementally assign them to the array
for (i = 0; i < numChars ; i++) {
  let RandomChoice = charSet[Math.floor(Math.random() * charSet.length)];
  password.push(RandomChoice);
}

return password.join("");
}
