//Tipo de dato primitivo que es inmutable
let numero = 23
numero = 23 + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false

//Tipo de dato complejo que es mutable
let usuario = {nombre : 'Pepito' , edad: 15}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[1] = 'plátano' 
console.log(frutas)


function cambiarNombre (objeto){
    objeto.nombre = "Juan"
}

let persona = {nombre: 'Antonio'}
cambiarNombre(persona)

console.log(persona)