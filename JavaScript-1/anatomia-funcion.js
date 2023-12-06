function calcularDescuento (precio, descuentoPorcentaje) {
    const descuento = (precio * descuentoPorcentaje) / 100
    const precioConDescuento = precio - descuento
    return precioConDescuento
}

const precioOriginal = 100
const descuento = 20
const precioFinal = calcularDescuento(precioOriginal, descuento)
console.log('Precio original: $'+ precioOriginal)
console.log('Descuento: '+ descuento + '%')
console.log(`Precio con descuento: $${precioFinal}`)