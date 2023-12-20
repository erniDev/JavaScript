//Enlace implícito -> implicit binging 
const house = {
    dogName : 'Fido',
    dogGreeting : function(){
        console.log(`hi, I'm ${this.dogName}`)
    }
}
house.dogGreeting()

//Enlace explicito -> explicit binging 
function dogGreeting(){
        console.log(`hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'coco'
}
dogGreeting.call(newHouse)


function newDogGreeting(owner, address){
    console.log(`hi, I'm ${this.dogName} and i live with ${owner} on ${address}`)
}
const owner = 'Maria'
const address = 'Calle falsa 1234'
newDogGreeting.call(newHouse, owner, address)