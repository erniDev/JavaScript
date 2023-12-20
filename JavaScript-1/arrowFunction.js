const greeting = function (name){
    return `Hi, ${name}`
}

//Arrow Function con un retorno que sea explicito 
const newGreeting =  (name) => {
    return `Hi, ${name}`
}

//Arrow Function con un retorno que sea implícito 
/* 
    nos permite escribir funciones corcas como java si escribir la palabra function y quitándole en ciertos casos 
    el paréntesis a la variable cuando solo hay una
*/ 
const newGreetingImplicit =  name => `Hi, ${name}`
const newGreetingImplicit2 =  (name, lastName) => `Hi, ${name}`

//Lexical Binding

const fictionalCharacter ={
    name: 'uncle Ben',
    messageWhitTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`)
    },
    messageWhitArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`)
    }
}
fictionalCharacter.messageWhitTraditionalFunction('With great power comes great responsibility')
fictionalCharacter.messageWhitArrowFunction('Beware of Doctor Octopus')


