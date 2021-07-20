'use strict'
/*SWITCH, una estructura un poco más compleja que permite hacer múltiples operaciones dependiendo del estado de una variable.*/
//


//Ejercicio 1: Dado un número entre 1 y 7 cree una funcion y use la expresion switch para determinar
// a que día de la semana corresponde
function obtenerNombreDia(diaSemana) {
    switch (diaSemana) {
        case 1:
            console.log("Es Lunes");
            break
        case 2:
            console.log("Es Martes");
            break
        case 3:
            console.log("Es Miércoles");
            break
        case 4:
            console.log("Es Jueves");
            break
        case 5:
            console.log("Es viernes");
            break
        case 6:
            console.log("Es sábado");
            break
        case 7:
            console.log("Es domingo");
            break
        default:
            console.log("Ese día no existe");
    }
}

obtenerNombreDia(3);
/*Modificar el ejercicio anterior para que imprima el mensaje Fin de Semana para los valores 6 y 7*/
function obtenerNombreDia(diaSemana) {
    switch (diaSemana) {
        case 1:
            console.log("Es Lunes");
            break
        case 2:
            console.log("Es Martes");
            break
        case 3:
            console.log("Es Miércoles");
            break
        case 4:
            console.log("Es Jueves");
            break
        case 5:
            console.log("Es viernes");
            break
        case 6:
        case 7:
            console.log("Fin de semana");
            break
        default:
            console.log("Ese día no existe");
    }
}

obtenerNombreDia(6);

/* La tienda mega promos esta lanzando su nuevo sistema de compras por internet y ha deicidido otorgar descuentos 
sobre el valor total de la compra a traves de los siguientes cupones:
PLUSORO 25% 
PLATINO 20%
BRONCE 5% 
imprima valor antes del descuento, porcentaje y valor del descuento aplicado además el precio final del producto*/
let precioProducto = 45000
let porcentajeDescuento = 0;
let valorDescuento = 0;
let precioFinal = 0;
let codigoPromocional = 'PLUSORO'

function obtenerPrecioFinal() {
    switch (codigoPromocional) {
        case "PLUSORO":
            porcentajeDescuento = 25;
            valorDescuento = (precioProducto * porcentajeDescuento) / 100;
            break;
        case "PLATINO":
            porcentajeDescuento = 20;
            valorDescuento = (precioProducto * porcentajeDescuento) / 100;
            break;
        case "BRONCE":
            porcentajeDescuento = 5;
            valorDescuento = (precioProducto * porcentajeDescuento) / 100;
            break;
        default:
            valorDescuento = 0;
            porcentajeDescuento = 0;
    }
    console.log(`-----------------------------------------------------------------`);
    console.log(`| Precio antes del descuento    -> ${precioProducto}`);
    console.log(`| Porcentaje descuento aplicado -> ${porcentajeDescuento}%`);
    console.log(`| El valor descuento ------------> ${valorDescuento}`);
    console.log(`| El valor total a pagar es -----> ${precioProducto - valorDescuento}`);
    console.log(`-----------------------------------------------------------------`);
}
obtenerPrecioFinal();