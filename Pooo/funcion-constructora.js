function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;}

const persona1 = new Persona("Juan", "Perez", 20);
console.log(persona1);

//solo se le añade la propiedad a la instancia a la con la cual  utilizamos
persona1.nacionalidad = "Mexicano";

const persona2 = new Persona("Diego", "De Granda", 35);

console.log(persona2);

//agregamos propiedades o métodos a la función constructora
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};

persona1.saludar();

persona2.saludar();