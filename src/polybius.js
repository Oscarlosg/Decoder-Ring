const polybiusModule = (function () {
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let code = "";
    if (encode) {
      //endcoding
      [...input].forEach((letter) => {
        switch (letter) {
          case "a":
            code += "11";
            break;
          case "b":
            code += "21";
            break;
          case "c":
            code += "31";
            break;
          case "d":
            code += "41";
            break;
          case "e":
            code += "51";
            break;
          case "f":
            code += "12";
            break;
          case "g":
            code += "22";
            break;
          case "h":
            code += "32";
            break;
          case "i":
          case "j":
            code += "42";
            break;
          case "k":
            code += "52";
            break;
          case "l":
            code += "13";
            break;
          case "m":
            code += "23";
            break;
          case "n":
            code += "33";
            break;
          case "o":
            code += "43";
            break;
          case "p":
            code += "53";
            break;
          case "q":
            code += "14";
            break;
          case "r":
            code += "24";
            break;
          case "s":
            code += "34";
            break;
          case "t":
            code += "44";
            break;
          case "u":
            code += "54";
            break;
          case "v":
            code += "15";
            break;
          case "w":
            code += "25";
            break;
          case "x":
            code += "35";
            break;
          case "y":
            code += "45";
            break;
          case "z":
            code += "55";
            break;
          default:
            code += letter;
            break;
        }
      });
      return code;
    }
    if (!encode) {
      //decoding
      const numCounter = [...input].filter(Number).length;
      if (numCounter % 2 === 0) {
        let decodResult = [];
        for (let i = 0; i < input.length; i++) {
          if (input[i] === " ") {
            decodResult.push(" ");
          } else {
            decodResult.push(`${input[i]}${input[i + 1]}`);
            i++;
          }
        }
        decodResult.forEach((letter) => {
          switch (letter) {
            case "11":
              code += "a";
              break;
            case "21":
              code += "b";
              break;
            case "31":
              code += "c";
              break;
            case "41":
              code += "d";
              break;
            case "51":
              code += "e";
              break;
            case "12":
              code += "f";
              break;
            case "22":
              code += "g";
              break;
            case "32":
              code += "h";
              break;
            case "42":
              code += "i/j";
              break;
            case "52":
              code += "k";
              break;
            case "13":
              code += "l";
              break;
            case "23":
              code += "m";
              break;
            case "33":
              code += "n";
              break;
            case "43":
              code += "o";
              break;
            case "53":
              code += "p";
              break;
            case "14":
              code += "q";
              break;
            case "24":
              code += "r";
              break;
            case "34":
              code += "s";
              break;
            case "44":
              code += "t";
              break;
            case "54":
              code += "u";
              break;
            case "15":
              code += "v";
              break;
            case "25":
              code += "w";
              break;
            case "35":
              code += "x";
              break;
            case "45":
              code += "y";
              break;
            case "55":
              code += "z";
              break;
            default:
              code += letter;
              break;
          }
        });
        return code;
      } else {
        return false;
      }
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
