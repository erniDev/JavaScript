//filter  crea un nuevo array con elementos que cumplen una condición dada por una función

const numbers= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(numbers)
console.log(evenNumbers)

//reduce Ejecuta una función reductora sobre cada elemento de un array devolviendo como resultado 
//un valor único
// .reduce(acumulador, elementos) => acumulador + elementos , valorInicial
const numbersReduce = [1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
console.log(numbersReduce)
console.log(sum)

//cuantas veces se repite una palabra en un array
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']
const wordFrecuency = words.reduce((accumulator, currentValue) => {
    if(accumulator [currentValue]){//acumulador [position]
        accumulator[currentValue] ++
    }else{
        accumulator[currentValue] = 1
    }
    return accumulator},{})
console.log(wordFrecuency)

//Promedio de calificaciones que son mayores o iguales a 70
const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94]
const passingGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length
console.log('Original Grades: ',grades)
console.log('Passing Grades: ',passingGrades)
console.log('Average Passing Grade: ',averagePassingGrade)