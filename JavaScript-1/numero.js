//Tipo Entero y decimal
const entero = 42
const decimal = 3.14
console .log(typeof entero, typeof decimal)

//Notación científica
const consCirntifico = 5e3

//Números infinitos y números que no son momeros
const infinito = Infinity
const noRdUnNumrto = NaN

//Operaciones aritméticas

//Suma, Resta, Multiplicación, Division 
const suma = 1 + 2
const resta = 1 - 2
const multiplicacion = 1 * 2
const division = 2 / 2

//Modulo y la exponenciacion 
const modulo = 10 % 2
const potencia = 2**3

//Precision 
const resultado = 0.1 + 0.2
console.log(resultado)
//Que valores queremos después del punto
console.log(resultado.toFixed(1))

// Para comparar 2 números y saber si son el mismo tipo en un console 
console.log(resultado === 0.3)

//Operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()