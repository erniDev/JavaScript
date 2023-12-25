/*
    iteramos sobre elementos enumerable
    for in ---> objetos -> es una estructura de datos que tiene 2 cosas propiedades que tienen un valor

    for (variable in objeto){
        código
    }
*/
const listaDeCompras={
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1};

for (fruta in listaDeCompras){
    console.log(fruta);
}

for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
for(fruta of listaDeCompras){
    console.log(fruta);
}