/**
    Un objeto es una estructura de datos 

    key / value

    propiedad = valor de la propiedad

    objeto {
        propiedad : valor,
        propiedad : valor

    }
 */

const persona = {
    nombre:  "John",
    edad : 30,
    direccion : {
        calle : "Av Insurgentre 187",
        ciudad:  "CDMX",
        },
    saludar(){
        console.log(`hola, mi nombre es ${persona.nombre}`);
        },
    };
// imprime un objeto 
console.log(persona);

//imprime la propiedad nombre
console.log(persona.nombre);

//imprime el método saludar
persona.saludar();

//agregar una nueva propiedad al objeto
persona.telefono = "555-555-5555";

//imprimo la nueva propiedad
console.log(persona.telefono);

//agrego nuevo método al objeto 
persona.despedir = () => {
    console.log("Adios");
};

//imprimo el nuevo método
persona.despedir();

//imprimo el objeto hijo del objeto 
console.log(persona.direccion.calle);

//como borrar propiedades, no podemos borrar métodos
delete persona.telefono;
delete persona.despedir();

// para evitar usar los métodos debemos decirle que sea undefined
persona.despedir() = undefined;