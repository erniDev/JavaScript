//copia arrays
const originalArray = [1,2,3,4,5]
const copyOfAnArray = [...originalArray]

console.log(originalArray)
console.log(copyOfAnArray)

//combina arrays
const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1,...array2]

console.log(array1)
console.log(array2)
console.log(combinedArray)

//crea arrays con elementos adicionales 
const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray,4,5,6]

console.log(baseArray)
console.log(arrayWithAdditionalElements)

//pasarle parámetros a una función 
function sum(a,b,c){return a+b+c}
const numbers = [1,2,3]
const result = sum(...numbers)

console.log(result)