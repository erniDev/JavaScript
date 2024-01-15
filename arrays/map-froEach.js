//map permite aplicar una función a cada elemento del array y permite construir un nuevo array con el 
//resultado

const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map( num => num * num )
console.log(numbers)
console.log(squaredNumbers)

// forEach Itera sobre cada elemento de un array y ejecuta una función proporcionada para cada elemento, 
// sin crear un nuevo array
const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))
console.log(colors)
console.log(iteratedColors)

//convertir f a c con map
const temperaturesInFahrenheit = [32, 68, 95, 104, 212]
const temperaturesInCelsius = temperaturesInFahrenheit.map(Fahrenheit => (5 / 9) * (Fahrenheit - 32))
console.log('Temperatures In Fahrenheit: ',temperaturesInFahrenheit)
console.log('Temperatures In Celsius: ',temperaturesInCelsius)

// suma de los elementos de un array con forEach
const newNumbers = [1, 2, 3, 4, 5]
let sum = 0
newNumbers.forEach(number => {sum += number})
console.log('Array of Numbers: ',newNumbers)
console.log('Sum of Numbers: ',sum)