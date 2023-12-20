const owner = 'Maria'
const address = 'Calle falsa 1234'
function dogGreeting(owner, address){
    console.log(`hi, I'm ${this.dogName} and i live with ${owner} on ${address}`)
}
const newHouse = {
    dogName: 'como'
}

// Llamar con call (Entorno de ejecución on función, variable , variable)
dogGreeting.call(newHouse, owner, address)

//Llamar con apply  colocamos las variables en uin Array(Entorno de ejecución on función, Array)
const necessaryValues =[owner, address]
dogGreeting.apply(newHouse, necessaryValues)

//Llamar con bind (Entorno de ejecución on función, variable , variable) -> devuelve una función  
const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
bindingWithBind()