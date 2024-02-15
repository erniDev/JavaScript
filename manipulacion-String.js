//formas de escribir Strings primitivos
const stringPrimitivo = 'Soy un String primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivo2 = String('Soy un String primitivo 2')
console.log(typeof stringPrimitivo2)

//Formas de escribir Strings objeto
const stringObjeto = new String('Soy un String objeto')
console.log(typeof stringObjeto)

//Como acceder a caracteres 

const saludo = 'Hola ¿Como estas?'

// para acceder a la l
console.log(saludo[2])
console.log(saludo.charAt(2))

//Para saber el indice de una letra
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Como'))

//Para saber cual es el indice de una palabra que no existe =-1
console.log(saludo.indexOf('komo'))

//Para saber cual es el ultimo indice de una letra
console.log(saludo.lastIndexOf('o'))

//Para saber que letra hay entre 2 caracteres
console.log(saludo.slice(3, 5))

//Para saber la longitud del String
console.log(saludo.length)

//Para que el texto este en mayúscula o en minúscula 
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

//Para dividir un String en un array
const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])

//Para quitar los espacios
const saludoConEspacios = ' Hola Mundo '
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

//Para reemplazar palabras en el String
const saludoOriginal = 'Hola mundo'
const nuevosaludo = saludoOriginal.replace('mundo', 'tierra')
console.log(nuevosaludo)