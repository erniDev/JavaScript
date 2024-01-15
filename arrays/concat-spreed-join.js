// Methods that DO NOT modify the original array (Immutability).

const morseCode1 = ['....', '---'] // H O
const morseCode2 = ['.-..', '.-'] // L A

// concat() combina los elementos de 2 o mas arrays

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// segunda forma de usar concat() con mas de  2 arrays

const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

// Combinar arrays mediante  Spread Operator

function combineMorseMessages (morseCode1, morseCode2) {
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessages(morseCode1, morseCode2)

const numbers = [1, 2, 3]
const string = 'string'

combineMorseMessages(numbers, string)

// join() concatena todos los elementos de un array en una cadena de texto, separados
// por un delimitador especifico

const morseCodeMessageString = morseCodeMessage.join('')

console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)