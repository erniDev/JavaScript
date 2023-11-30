//creación de string
const primerString = 'Comillas Simples'
const segundoString = "Comillas dobles"
const terceraString = `Comillas Simples`

//1. Concatenación: Opción +
const direccion = 'calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es: ' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi dirección completa es: ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

//2. Concatenación: Template Literals
const nombre = 'Erick'
const pais = '​🇨🇴​'
const presentacion = `Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//3. Concatenación: join
const primeraParte = 'Me encanta'
const segundaParte = 'la gente'
const TerceraParte = 'de 🇨🇻​'
const pensamiento = [primeraParte, segundaParte, terceraString]
console.log(pensamiento.join(' '))

//4. Concatenación: concat
const hobbie1 = '🎶'
const hobbie2 = '🧑‍💻'
const hobbie3 = '⚽'
const hobbies = 'mis hobbies son : ' .concat(hobbie1, ', ', hobbie2, ', ',hobbie3, '.')
console.log(hobbies)

//caracteres de escape
//const whatDoIDo = 'I'm Software Engineer'

//1. Escape alternativo con commillas dobles 
const escapeAlternativo = "I'm Software Engineer"

//2. Barra invertida 
const escapebarraInvertida = 'I \'m Software Engineer'

//3. Template Literals 
const escapeConComillaInvertida = `I'm Software Engineer`

//Escritura de String largos
/*
    Las rosas son rojas,
    Las violetas son azules, 
    Carácter inesperado,
    En la linea 86.
*/
const poema =   'Las rosas son rojas,\n' +
                'Las violetas son azules,\n' +
                'Carácter inesperado,\n' +
                'En la linea 86.'
console.log(poema) 

const poema2 =  'Las rosas son rojas,\n\
Las violetas son azules,\n\
Carácter inesperado,\n\
En la linea 86.'
console.log(poema2) 

const poema3 =  `Las rosas son rojas,
Las violetas son azules,
Carácter inesperado,
En la linea 86.`
console.log(poema3) 