let precioKimono = 20000;

// CODIGO PROMOCIONAL: AHFX2

function aplicarCuotas (precioKimono) {
    let resultado = precioKimono / 12;
    return alert(`Su cuota por mes es de $${resultado}`);
}

function aplicarDescuento (precioKimono) {
    let precioCuotaPorMes = precioKimono / 12;
    let descuentoCuotaPorMes = precioCuotaPorMes * 0.20;
    let resultadoFinal = precioCuotaPorMes - descuentoCuotaPorMes;
    return alert(`¡DESCUENTO APLICADO EXITOSAMENTE! Su cuota por mes con descuento quedaria en ${resultadoFinal}. ¡Gracias por tu compra!`)
}

let preguntaInicial = prompt("¿Desea comprar un kimono? (Responda con SI o NO)").toLowerCase();;

if (preguntaInicial === "si") {
    let segundaPregunta = prompt("Perfecto, ahora indique '1' si quiere un solo pago, o indique '2' si quiere 12 cuotas.");
    if (segundaPregunta === "1") {
        alert("Perfecto, su compra fue realizada con exito en un solo pago.")
    } else if (segundaPregunta === "2") {
        console.log(aplicarCuotas(precioKimono));
        if (segundaPregunta === "2") {
            let tercerPregunta = prompt("¿Tiene algun codigo de descuento? De ser asi ingreselo.")
            if (tercerPregunta === "AHFX2") {
                console.log(aplicarDescuento(precioKimono));
            } else {
                alert("Tu codigo es invalido.")
            }
        }
    } else {
        console.log("No entendi tu respuesta :(")
    }
} else if (preguntaInicial === "no" || preguntaInicial === "") {
    alert("No hay problema, te esperamos en otro momento :)")
}