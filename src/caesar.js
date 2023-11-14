
const caesarModule = (function (letter) {
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
