// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// should return false if the shift value === 0
//use .toLowerCase()
//it should handle shifts that go past the end of the alphabet.
//ex. if z, 3, it should wrap to the beggining of the alphabe. IE/ c
//it should mantain spaces and other nonalphabetic symbols in the message before and after passing thorugh function
const caesarModule = (function (letter) {
  //create an if statement to check if its encoding or decoding first
  //check if shift value is larger than 0, else return false

  // expected output: "The character code 113 is equal to q"

  // when encoding & decoding, it translates letter i and j to 42
  //use .toLowerCase()
  //mantains spaces in the message'
  //use .charCodeAt() - this turns the letter into a UTF-16 code #
  //use .fromCharCode() - this turns an UTF-16 number into a "letter"
  //use a loop to loop through each letter
  //turn letter into utf then in the loop add the letter to the shift #
  function caesar(input, shift, encode = true) {
    input = input.toLowerCase();
    let result = "";
    if (!shift) return false;
    if (shift > 25 || shift === 0 || shift < -25) return false;
    for (let i = 0; i < input.length; i++) {
      let turnedNumber = input.charCodeAt(i);
      if (turnedNumber === 32) {
        turnedNumber = " ";
      }
      if (turnedNumber <= 96 || turnedNumber >= 123) {
        turnedNumber = input[i];
      } else {
        if (encode)
          //encoding
          turnedNumber += shift;
        if (!encode)
          //decoding
          turnedNumber -= shift;
        if (turnedNumber <= 96) turnedNumber += 26;
        if (turnedNumber >= 123) turnedNumber -= 26;
        turnedNumber = String.fromCharCode(turnedNumber);
      }
      result += turnedNumber;
    }
    return result;
  }

  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
