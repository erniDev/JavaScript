// Methods that DO NOT modify the original array (Immutability).

const ages = [21, 25, 30, 19, 22]

// every() determina si todos los elementos en el array satisfacen una condición

const allAreAdults = ages.every(age => age > 20)

console.log(ages)
console.log(allAreAdults)

// some() determina si al menos uno de  los elementos en el array satisfacen una condición
const atLeastOneIsOver30 = ages.some(age => age > 30)

console.log(ages)
console.log(atLeastOneIsOver30)