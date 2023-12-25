// Methods that modify the original array (Mutability).

// splice() cambia el contenido del array eliminando elementos existentes y/o agregando nuevos elementos
// splice(posición del primer elemento que queremos eliminar, cantidad de elementos que se eliminan, elementos que queremos agregar, , ,  )
const vegetables = ['carrot', 'broccoli', 'spinach', 'tomato']
const removedVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables)
console.log(removedVegetables)

// reverse() nos permite organizar el array al revés

const numbers = [1, 2, 3, 4, 5]
const reversedNumbers = numbers.reverse()

console.log(numbers)
console.log(reversedNumbers)

// sort() with number organiza los elementos de un array y devuelve un array ordenado, Convirtiéndolos a string 

const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)

//Para ordenarlos de números menor a mayor
const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)

console.log(unsortedNumbers2)
console.log(sortedNumbers)

// sort() with strings Â· UTF-16

const cities = ['New York', 'Paris', 'Tokyo', 'London']
const sortedCities = cities.sort()

console.log(cities)
console.log(sortedCities)

// fill() cambia todos los elementos en un array por un calor estático, desde el indice start hasta el indice end   

const ages = [21, 35, 45, 50]

//fill(con que queremos llenar el array, posición de inicio, posición final)
console.log(ages.fill(0, 2, 4))

//fill(con que queremos llenar el array, posición de inicio)
console.log(ages.fill(15, 1))

//fill(llena el array con 15)
console.log(ages.fill(15))