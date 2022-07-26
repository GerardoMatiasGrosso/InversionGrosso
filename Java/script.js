

const fci1 = 0.0135
const fci2 = 0.0200
const fci3 = 0.1000
const fci4 = 0.2000

function rendimiento(tiempo = 0, fci1){
    return(fci1*tiempo)
}

function rendimiento(tiempo = 0, fci2){
    return(fci2*tiempo)
}

function rendimiento(tiempo = 0, fci3){
    return(fci3*tiempo)
}

function rendimiento(tiempo = 0, fci4){
    return(fci4*tiempo)
}

let cantidad,fondo,tiempo


1
console.log("A continuación vamos calcular el rendimiento de tu inversion en un Fondo Común de inversión")

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

switch(fondo) {
        case fondo = 1:
            alert(`El rendimiento es ${(rendimiento(tiempo, fci1)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break

        case fondo = 2:
            alert(`El rendimiento es ${(rendimiento(tiempo, fci2)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break    
        case fondo = 3:
            alert(`El rendimiento es ${(rendimiento(tiempo, fci3)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break

        case fondo = 4:
            alert(`El rendimiento es ${(rendimiento(tiempo, fci4)*cantidad).toFixed(2)} pesos en ${tiempo} dias`)
        break        
        default:
        alert("fondo no existe")
}




