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
    const SPACE =' ';
    let processedMorseMessage = processMorse(deleteUnusedZeros(splitOnChunks(expr)));
    return processedMorseMessage.reduce((acc,elem)=>{
        if(elem === SPACE){
            return acc + ' ';
        }
        return acc + MORSE_TABLE[elem];
    },'')
}

function splitOnChunks(str){
    let outputChunk =[];
    let chunks = str.length/10;
    for (let i = 0; i < chunks; i++) {
        outputChunk.push(str.slice(i*10,10+i*10))
    }
    return outputChunk;
}

function deleteUnusedZeros(arr){
    return arr.reduce((acc,elem)=>{
        while (elem.charAt(0)==='0'){
            elem = elem.substr(1)
        }
        acc.push(elem);
        return  acc
    },[])
}

function processMorse(arr) {
    const SPACE = '**********';
    return arr.reduce((acc,elem)=>{
        if(elem === SPACE){
            acc.push(' ');
        }else{
            let replacedWithPoint = elem.replace(/10/g,'.');
            let replacedWithDash = replacedWithPoint.replace(/11/g,'-');
            acc.push(replacedWithDash);
        }
        return acc
    },[])
}

module.exports = {
    decode
};