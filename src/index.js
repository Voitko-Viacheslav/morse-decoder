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

function decode(expr) { 

    let array = [];
    for (let i = 0; i < expr.length; i+=10) {
        let str = '';
        str +=(expr.slice(i, i+10));

        while(str.length < 10) {
            str = '0' + str;
        }
        array.push(str)
    }

    let result = [];
    array.forEach(item => {
        let res = [];

        for (let i = 0; i < 10; i+=2) {
            let str = item.slice(i, i+2);
            if (str == 10) {
                res.push('.') 
            } 
            else if
            (str == 11) {
                res.push('-')  
            }
            else if
            (str == '') {
                res.push(' ')  
            }
        }

        let current = res.join('');
        for (key in MORSE_TABLE) {
            if (key == current) {
                result.push(MORSE_TABLE[key])
            }   
        } 

        if (current == '') {
            result.push(' ');
        }
    })

    return result.join('');
}
console.log(decode('0010101010000000001000101110100010111010000011111100001011110000111111000010111000101110100000111010'));

module.exports = {
    decode
}


