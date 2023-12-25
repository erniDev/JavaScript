//Como crear un array
const fruits = Array('apple','banana','orange')
console.log(fruits)

//De esta forma no se puede crear arrays de un solo numero
const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1,2,3,4,5)
console.log(number)

// Segunda forma de como crear un array y permite guardar un solo numero dentro del array
const oneNumber = [4]
console.log(oneNumber)


const emptyArray = []
console.log(emptyArray)

const sports = ['soccer','tennis','rugby']
console.log(sports)

//en un array podemos crearlo con diferentes valores y/o objetos
const recipeIngredients = ['Flour',
    true,
    2,
    {
        ingredient:'Milk',
        quantity:'1 cup'
    },
    false
]
console.log(recipeIngredients)


//Acceder a arrays
const firstFruit = fruits[0]
console.log(firstFruit)

const numberOfFruits = fruits.length
console.log(numberOfFruits)

//mutabilidad o mutability
//Agregar un elemento a un array
fruits.push('watermelon')
console.log(fruits)

//inmutabilidad o immutability
//Sumamos 2 arrays
const newFruits = fruits.concat(['grape','kiwi'])
console.log(fruits)
console.log(newFruits)

//Como saber si un array es un array
const isArray = Array.isArray(fruits)
console.log(isArray)

//Suma de todos los elementos de un array
const numbersArray = [1,2,3,4,5]
let sum = 0

for(let i = 0; i < numbersArray.length; i++){
    sum += numbersArray[i]
}
console.log(sum)

//ejercicios https://static.platzi.com/media/public/uploads/ejercicios-arrays_4dcb218d-1793-4e6d-be01-f540e8e40d4b.pdf
