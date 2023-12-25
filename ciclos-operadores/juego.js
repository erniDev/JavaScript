const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador = parseInt(
    prompt("Adivina el numero secreto entre el 1 al 10") //prompt nos permite escribir en el navegador 
);

console.log(`Este es el numero con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
    console.log(`¡Felicidades, adivinaste el numero secreto! era ${numeroSecreto}`);
} else if (numeroJugador < numeroSecreto) {
    console.log("El numero es demasiado bajo, intenta de nuevo, el numero era: " + numeroSecreto);
} else {
    console.log("El numero es muy alto, intenta de nuevo, el numero era: " + numeroSecreto);
}