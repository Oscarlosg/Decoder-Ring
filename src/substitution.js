const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    input = input.toLowerCase();
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    alphabet = alphabet.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    if (encode) {
      let code = "";
      [...input].forEach((sub) => {
        switch (sub) {
          case "a":
            code += `${alphabet[0]}`;
            break;
          case "b":
            code += `${alphabet[1]}`;
            break;
          case "c":
            code += `${alphabet[2]}`;
            break;
          case "d":
            code += `${alphabet[3]}`;
            break;
          case "e":
            code += `${alphabet[4]}`;
            break;
          case "f":
            code += `${alphabet[5]}`;
            break;
          case "g":
            code += `${alphabet[6]}`;
            break;
          case "h":
            code += `${alphabet[7]}`;
            break;
          case "i":
            code += `${alphabet[8]}`;
            break;
          case "j":
            code += `${alphabet[9]}`;
            break;
          case "k":
            code += `${alphabet[10]}`;
            break;
          case "l":
            code += `${alphabet[11]}`;
            break;
          case "m":
            code += `${alphabet[12]}`;
            break;
          case "n":
            code += `${alphabet[13]}`;
            break;
          case "o":
            code += `${alphabet[14]}`;
            break;
          case "p":
            code += `${alphabet[15]}`;
            break;
          case "q":
            code += `${alphabet[16]}`;
            break;
          case "r":
            code += `${alphabet[17]}`;
            break;
          case "s":
            code += `${alphabet[18]}`;
            break;
          case "t":
            code += `${alphabet[19]}`;
            break;
          case "u":
            code += `${alphabet[20]}`;
            break;
          case "v":
            code += `${alphabet[21]}`;
            break;
          case "w":
            code += `${alphabet[22]}`;
            break;
          case "x":
            code += `${alphabet[23]}`;
            break;
          case "y":
            code += `${alphabet[24]}`;
            break;
          case "z":
            code += `${alphabet[25]}`;
            break;
          default:
            code += sub;
            break;
        }
      });
      return code;
    }
    if (encode === false) {
      let code = "";
      [...input].forEach((sub) => {
        switch (sub) {
          case `${alphabet[0]}`:
            code += "a";
            break;
          case `${alphabet[1]}`:
            code += "b";
            break;
          case `${alphabet[2]}`:
            code += "c";
            break;
          case `${alphabet[3]}`:
            code += "d";
            break;
          case `${alphabet[4]}`:
            code += "e";
            break;
          case `${alphabet[5]}`:
            code += "f";
            break;
          case `${alphabet[6]}`:
            code += "g";
            break;
          case `${alphabet[7]}`:
            code += "h";
            break;
          case `${alphabet[8]}`:
            code += "i";
            break;
          case `${alphabet[9]}`:
            code += "j";
            break;
          case `${alphabet[10]}`:
            code += "k";
            break;
          case `${alphabet[11]}`:
            code += "l";
            break;
          case `${alphabet[12]}`:
            code += "m";
            break;
          case `${alphabet[13]}`:
            code += "n";
            break;
          case `${alphabet[14]}`:
            code += "o";
            break;
          case `${alphabet[15]}`:
            code += "p";
            break;
          case `${alphabet[16]}`:
            code += "q";
            break;
          case `${alphabet[17]}`:
            code += "r";
            break;
          case `${alphabet[18]}`:
            code += "s";
            break;
          case `${alphabet[19]}`:
            code += "t";
            break;
          case `${alphabet[20]}`:
            code += "u";
            break;
          case `${alphabet[21]}`:
            code += "v";
            break;
          case `${alphabet[22]}`:
            code += "w";
            break;
          case `${alphabet[23]}`:
            code += "x";
            break;
          case `${alphabet[24]}`:
            code += "y";
            break;
          case `${alphabet[25]}`:
            code += "z";
            break;
          default:
            code += sub;
            break;
        }
      });
      return code;
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
