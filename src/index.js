const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const dot = '.';
const dash = '-';

function decode(expr) {
  const dot = '.';
  const dash = '-';
  const space = ' ';
  let strMorse = '';
  let receivedStr = expr;
  let result = '';
  do {
    let sumbolBlock = receivedStr.substr(0, 10);
    if (sumbolBlock === '**********') {
      result = `${result}${space}`;
    } else {
      do {
        let twoSumbol = sumbolBlock.substr(0, 2);
        if (twoSumbol === '00') {
          strMorse = strMorse;
        } else if (twoSumbol === '10'){
          strMorse = `${strMorse}${dot}`;
        } else {
          strMorse = `${strMorse}${dash}`;
        };
        sumbolBlock = sumbolBlock.substr(2);
      } while (sumbolBlock.length > 0);
        result = `${result}${MORSE_TABLE[strMorse]}`;
        //console.log(result);
        strMorse = '';
      };    
    receivedStr = receivedStr.substr(10);
  } while (receivedStr.length > 0);
  return result;
}

module.exports = {
    decode
}
