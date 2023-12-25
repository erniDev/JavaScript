//Crear chicha Super poderosa 
/*
    cream0os la función constructora con un nombre, colo ,super poder
*/
function PowerpuffGirl(name,color,superpower){
    this.name=name
    this.color=color
    this.superpower=superpower
    this.isLeader=false
    
    //Método de que cuando llamemos a cada una nos muestre la descripción 
    this.displayInfo=function(){console.log(`Powerpuff Girl Information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.superpower}
        
        ${this.isLeader?'Leader: Yes':'Leader: No'}`)
        //Muestra el valor booleano. Es un if recortado $ {condición ? mensaje si es verdadero : mensaje si no los es} 
    }
    //Método que muestra si es líder o no
    this.becomeLeader = function(){
        this.isLeader=true
        console.log(`${this.name} has become the leader of the Powerpuff Girls !`)
    }
}
    
//Creación de instancias para diferentes objetos
const blossom = new PowerpuffGirl('Blossom','Pink','Ice Breath')
const buttercup = new PowerpuffGirl('Buttercup','Green','Super Strength')
const bubbles = new PowerpuffGirl('Bubbles','Blue','Flight')
    
blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()

blossom.becomeLeader()

blossom.displayInfo()
buttercup.displayInfo()
bubbles.displayInfo()