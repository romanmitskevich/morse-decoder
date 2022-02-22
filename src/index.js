const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
   ' ': ' ',
};

function decode(expr) {
   let arrayWithEveryLetter = [];
   for (let i = 0; i < expr.length; i += 10) {
      arrayWithEveryLetter.push(expr.slice(i, i + 10));
   }

   let arrayWithDecodedLetter = [];
   let resultDecodedString = [];

   for (let element of arrayWithEveryLetter) {
      for (let i = element.length; i >= 0; i -= 2) {
         if (element.slice(i - 2, i) === '10') {
            arrayWithDecodedLetter.unshift('.');
         } else if (element.slice(i - 2, i) === '11') {
            arrayWithDecodedLetter.unshift('-');
         } else if (element.slice(i - element.length, i) === '**********') {
            arrayWithDecodedLetter.unshift(' ');
         };
      }

      resultDecodedString.push(MORSE_TABLE[arrayWithDecodedLetter.join('')])
      arrayWithDecodedLetter.length = 0;
   }

   return resultDecodedString.join('');
}

module.exports = {
   decode
}