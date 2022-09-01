/* let precioKimono = 20000;

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
                alert("Tu codigo es invalido.");
            }
        }
    } else {
        console.log("No entendi tu respuesta :(")
    }
} else if (preguntaInicial === "no" || preguntaInicial === "") {
    alert("No hay problema, te esperamos en otro momento :)")
} */





const itemsDisponibles = [{  
    nombre: "Guantes de Boxeo",
    id:1,
    deporte: "striking",
    colores: "blanco/negro/rojo",
    precio: 8000,
},
{
    nombre: "Kimono Jiu Jitsu",
    id:2,
    deporte: "grappling",
    colores: "blanco/negro",
    precio: 20000,
},
{
    nombre: "Termina Jiu Jitsu",
    id:3,
    deporte: "grapplig",
    colores: "blanco/negro/azul/amarillo",
    precio: 10000,
},
{
    nombre: "Bolsa de Boxeo",
    id:4,
    deporte: "striking",
    colores: "blanco-rojo/negro",
    precio: 12000,
},
{
    nombre: "Guantes MMA",
    id:5,
    deporte: "striking",
    colores: "negro",
    precio: 7000,
},
{
    nombre: "Protector Bucal",
    id:6,
    deporte: "stricking/grappling",
    colores: "negro, blanco, azul, violeta",
    precio: 4000,
}
]


prompt("¡HOLA! Buenos dias. Bienvenido a LOTUS SHOP, la tienda n1 de deportes de contacto en Argentina. A continuacion te mostramos todos nuestros productos. (PRESIONE ENTER)")
for(let i = 0; i < itemsDisponibles.length; i++){
    alert(itemsDisponibles[i].nombre + ( ` - precio $${itemsDisponibles[i].precio}`));
 }
 

let array = [];
for(var i = 0; i <= 3; i++)
   if (i === 1) {
    let item1 = Number(prompt("Elegi algunos de estos productos \n 1- Guantes de Boxeo \n 2- Kimono de JiuJitsu \n 3- Termica JiuJitsu \n 4- Bolsa de Boxeo \n 5- Guantes de MMA \n 6- Protector Bucal"));
    if (item1 === 1) {
        alert(`Elegiste Guantes de Boxeo.`)
        array.push("Guantes de boxeo ")
    }
    else if (item1 === 2) {
        alert("Elegiste Kimono de JiuJitsu.")
        array.push("Kimono de JiuJitsu ")
    }
    else if (item1 === 3) {
        alert("Elegiste Termica JiuJitsu.")
        array.push("Termica JiuJitsu ")
    } else if (item1 === 4 ) {
        alert("Elegiste Bolsa de Boxeo.")
        array.push("Bolsa de Boxeo ")
    } else if (item1 === 5 ) {
        alert("Elegiste Guantes de MMA.")
        array.push("Guantes de MMA ")
    } else if (item1 === 6 ) {
        alert("Elegiste Protector Bucal.")
        array.push("Protector bucal ")
    }
   }
   else if (i === 2){
    let item2 = Number(prompt("Perfecto, te faltan elegir dos productos: \n 1- Guantes de Boxeo \n 2- Kimono de JiuJitsu \n 3- Termica JiuJitsu \n 4- Bolsa de Boxeo \n 5- Guantes de MMA \n 6- Protector Bucal"))
    if (item2 === 1) {
        alert(`Elegiste Guantes de Boxeo.`)
        array.push("Guantes de boxeo ")
    }
    else if (item2 === 2) {
        alert("Elegiste Kimono de JiuJitsu.")
        array.push("Kimono de JiuJitsu ")
    }
    else if (item2 === 3) {
        alert("Elegiste Termica JiuJitsu.")
        array.push("Termica JiuJitsu ")
    } else if (item2 === 4 ) {
        alert("Elegiste Bolsa de Boxeo.")
        array.push("Bolsa de Boxeo ")
    } else if (item2 === 5 ) {
        alert("Elegiste Guantes de MMA.")
        array.push("Guantes de MMA ")
    } else if (item2 === 6 ) {
        alert("Elegiste Protector Bucal.")
        array.push("Protector bucal ")
    }

   }
    else if (i === 3) {
    let item3 = Number(prompt("¿Que es lo ultimo que vas a comprar? \n 1- Guantes de Boxeo \n 2- Kimono de JiuJitsu \n 3- Termica JiuJitsu \n 4- Bolsa de Boxeo \n 5- Guantes de MMA \n 6- Protector Bucal"));
    if (item3 === 1) {
        alert(`Elegiste Guantes de Boxeo.`)
        array.push("Guantes de boxeo")
    }
    else if (item3 === 2) {
        alert("Elegiste Kimono de JiuJitsu.")
        array.push("Kimono de JiuJitsu")
    }
    else if (item3 === 3) {
        alert("Elegiste Termica JiuJitsu.")
        array.push("Termica JiuJitsu")
    } else if (item3 === 4 ) {
        alert("Elegiste Bolsa de Boxeo.")
        array.push("Bolsa de Boxeo")
    } else if (item3 === 5 ) {
        alert("Elegiste Guantes de MMA.")
        array.push("Guantes de MMA")
    } else if (item3 === 6 ) {
        alert("Elegiste Protector Bucal.")
        array.push("Protector bucal")
    }
    alert(`¡Felicitaciones! Tu compra ha finalizado, te recordamos que compraste ${array}.`)
   }
 



