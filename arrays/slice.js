// slice() crea una copia superficial de una porción del array, especificada por indices de inicio hy 
//fin

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

//desde el indice inicial hasta el ultimo elemento
console.log(animals.slice(2))

//indice inicial y final no se incluye el elemento del indice final
console.log(animals.slice(2, 4))

//indice inicial y final no se incluye el elemento del indice final
console.log(animals.slice(1, 6))

//para los últimos indices
console.log(animals.slice(-2))

console.log(animals.slice(2, -1))

//devuelve el array original
console.log(animals.slice())