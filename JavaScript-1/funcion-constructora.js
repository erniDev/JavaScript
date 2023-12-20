const mensajePersonalizado = () => 'Adios a todos'

function Rocket (name){
    this.name = name
    this.launchMessage = function() {
        console.log('fire')
    }
}

const falcon9Rocket = new Rocket('Falcon 9')
const falcon9Heavy = new Rocket('Falcon Heavy')

console.log(falcon9Rocket.name)
console.log(falcon9Rocket.launchMessage())


//


function Rocke (name, ownMessage){
    this.name = name
    this.launchMessage = () => console.log(ownMessage)
    
}

const falcon9Rocke = new Rocke('Falcon 9', mensajePersonalizado)
const falcon9Heav = new Rocke('Falcon Heavy', 'Todo listo')

console.log(falcon9Rocke.name)
console.log(falcon9Rocke.launchMessage())


//

const rocketWithArrowFunction = (name, ownMessage) => ({
    nme: name,
    launchMessage: ownMessage
})

const mensajePersonalizado2 = () => 'Adios a todos y todas'
const falcon = rocketWithArrowFunction('Falcon 9', mensajePersonalizado2)

console.log(falcon.nme)
console.log(falcon.launchMessage())
