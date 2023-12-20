//Funciones puras
//Side Effects -> efectos secundarios 
//1. Modificar variables globales
//2. Modificar parámetros  
//3. Solicitudes http o api
//4. Imprimir mensajes pantalla o en consola 
//5. Manipulación del DOM
//6. Obtener la hora actual

function sum(a, b) {
    return a + b
}

//Función impura 
function sum(a, b) {
    console.log('A: ', a)
    return a + b
}

let total = 0

function sunWithSiteEffect (a){
    total +=  a
    return total
}

//Función pura
function square (x){
    return x * x
}

function addTen (y){
    return y + 10
}

const number = 5 
const finalResult = addTen(square(number))
console.log(finalResult)
