

class Fci{

constructor(nombre, tipoRenta, valorCuota, riesgo, numeroFci){

    this.nombre = nombre
    this.tipoRenta = tipoRenta
    this.valorCuota = valorCuota
    this.riesgo = riesgo
    this.numeroFci = numeroFci
}

}

/*Constructor de FCI en adelante*/

const fci1 = new Fci("Conservador", "fija", 0.0135, "bajo", 1)
const fci2 = new Fci("Moneymarket", "fija", 0.0200, "bajo", 2)
const fci3 = new Fci("Acciones", "variable", 0.1000, "alto", 3)
const fci4 = new Fci("Acciones Conservador", "mixta", 0.2000, "medio", 4)

const fcis = [fci1, fci2, fci3, fci4]

fcis.forEach((fciArray) => {

    console.log(fciArray)
})

console.log(fci1.valorCuota)
console.log(fci2.valorCuota)
console.log(fci3.valorCuota)
console.log(fci4.valorCuota)
