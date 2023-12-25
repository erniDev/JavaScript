//null
const snoopy = null
console.log(snoopy)
console.log(typeof snoopy)

//undefine
let name
console.log(name)

//Symbol sirve para escribir valores que son únicos, que no cambien que sean siempre el mismo
const uniqueId = Symbol('id')
const symbol1 =Symbol(1)
const symbol2 =Symbol(1)
console.log(symbol1 === symbol2)

const ID = Symbol('id')
let user = {}
user[ID] = '1234'
console.log(user)

//BigInt Sirve para manejar números muy grandes
const bigNumber = 1265132132n
console.log(bigNumber)

const numbreOfParticlesInTheUniverse = 100000000000000000n
console.log(numbreOfParticlesInTheUniverse)
