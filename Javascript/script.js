







const divFondos = document.getElementById("divFondos")

fcis.forEach((Fci) => {
    divFondos.innerHTML += 
    
`
  <div class="Fcis">
    <h5 class="tituloFondo">El fondo de inversión ${Fci.nombre}</h5>
    <p class="card-text">Tipo de Renta: ${Fci.tipoRenta}</p>
    <p class="card-text">Ratio de rendimiento: ${Fci.valorCuota}</p>
    <p class="card-text">Riesgo: ${Fci.riesgo}</p>
    <p class="card-text">Nuemero de fondo: ${Fci.numeroFci}</p>
  </div>
`

}



)


boton1.addEventListener("click", () => {



function rendimiento(tiempo = 0, cuota = 0){
    return(cuota*tiempo)
}

let cantidad,fondo,tiempo,pregunta
console.log("A continuación vamos calcular el rendimiento de tu inversion en un Fondo Común de inversión")

/*La siguiente Iteración valida la calidad de los datos para constatar si esta fuertemente tipado
*/

do {
     tiempo = parseFloat(prompt("Ingrese la cantidad de dias que desea invertir en numeros"))
     cantidad = parseFloat(prompt("Ingrese la cantidad de pesos que desea invertir"))
     fondo = parseFloat(prompt("ingrese el numero de fondo que desea invertir, tenga en cuenta que son del 1 al 4"))

     if(isNaN(cantidad) || isNaN(fondo) || isNaN(tiempo) || fondo < 1 || fondo > 4){ 
   
        if(isNaN(cantidad)){
            console.log(`ingresaste mal la cantidad, debe ser numerico y positivo`)
        }        
        if(isNaN(tiempo)){
            console.log(`ingresaste mal el tiempo, debe ser numerico y positivo`)
        }   
        if(isNaN(fondo)){
            console.log(`ingresaste mal el fondo debe, estar comprendido entre 1 y 4`)
        }
        }   
    
} while (isNaN(cantidad) || isNaN(fondo) || isNaN(tiempo) || fondo < 1 || fondo > 4)

console.log("Los datos son correctos")

/*
Calcula con la funcion rendimiento, teniendo en cuenta los dias, el fondo y la plata invertida
*/

switch(fondo) {
        case fondo = 1:
            alert(`El rendimiento es ${(rendimiento(tiempo, cuota = fci1.valorCuota)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break

        case fondo = 2:
            alert(`El rendimiento es ${(rendimiento(tiempo, cuota = fci2.valorCuota)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break    
        case fondo = 3:
            alert(`El rendimiento es ${(rendimiento(tiempo, cuota = fci3.valorCuota)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break

        case fondo = 4:
            alert(`El rendimiento es ${(rendimiento(tiempo, cuota = fci4.valorCuota)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break        
        default:
        alert("fondo no existe")
}


pregunta = parseFloat(prompt("si desea realizar otra inversión tipee 1, caso contrario tipee cualquier otra cosa"))
console.log(pregunta)


})


localStorage.setItem("cartera", JSON.stringify([{diner: cantidad,inversion: fondo,plazo: tiempo }]))
console.log(JSON.parse(localStorage.getItem("cartera")))