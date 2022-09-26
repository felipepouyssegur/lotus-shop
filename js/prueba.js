// MIS PRODUCTOS (Array de objetos)

let productos = [
{
    id: 1,
    nombre: "KIMONO VENUM",
    precio: 20000,
    imagen: "../multimedia/kimono.png",
    deporte: "grappling",
},
{
    id: 2,
    nombre: "RUSHGUARD",
    precio: 15000,
    imagen: "../multimedia/rushguard.png",
    deporte: "grappling",
},
{
    id: 3,
    nombre: "GUANTES MMA",
    precio: 8000,
    imagen: "../multimedia/guantesmma.png",
    deporte: "striking",
},
{
    id: 4,
    nombre: "GUANTES BOXEO",
    precio: 10000,
    imagen: "../multimedia/guantesboxeo.png",
    deporte: "striking",
},
{
    id: 5,
    nombre: "BOLSA DE BOXEO",
    precio: 13000,
    imagen: "../multimedia/bolsaboxeo.png",
    deporte: "striking",
},
{
    id: 6,
    nombre: "PROTECTOR BUCAL",
    precio: 4000,
    imagen: "../multimedia/protectorbucal.png",
    deporte: "striking",
},
{
    id: 7,
    nombre: "TIBIALES MMA",
    precio: 6000,
    imagen: "../multimedia/tibiales.png",
    deporte: "striking",
},
{
    id: 8,
    nombre: "CASCO SPARRING",
    precio: 7000,
    imagen: "../multimedia/casco.png",
    deporte: "striking",
},
];


//CREO CARDS DE TIENDA.HTML


const crearCards = () => {
    let contenedor = document.getElementById("container")
    productos.forEach((producto, indice) => {
        let card = document.createElement("div")
        card.classList.add("col-xl-3", "col-lg-3", "col-md-6", "col-sm-6")
        card.innerHTML = `<div class="glasses_box">
        <figure><img src="${producto.imagen}" alt="esta es una foto de ${producto.nombre}"/></figure>
        <h3><span class="blu">$</span>${producto.precio}</h3>
        <p>${producto.nombre}</p>
        <button type="button" class="btn btn-outline-secondary boton-comprar" id="asd" onClick = "agregarAlCarrito (${indice})">COMPRAR</button>
     </div>`

        contenedor.appendChild(card)
    })
}

crearCards();


//CREO CARRITO 

let cart = [];
let modalCarrito = document.getElementById("cart")


const agregarAlCarrito = (indice) => {
    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === productos[indice].id
    })
    if (indiceEncontradoCarrito === -1) {
        const productoAgregar = productos[indice]
        productoAgregar.cantidad = 1
        cart.push(productoAgregar)
        dibujarCarrito()
    }else {
        cart[indiceEncontradoCarrito].cantidad += 1
        dibujarCarrito()
    }

    Toastify({
        text: `Producto agregado al carrito.`,
        duration: 1500,
        offset: {
            x: 100, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        style: {
            background: "linear-gradient(90deg, rgba(255,255,255,0.7231267507002801) 0%, rgba(79,79,79,1) 0%, rgba(0,0,0,1) 100%)",
          },
        }).showToast();
};


let total = 0;

const dibujarCarrito = () => {
    modalCarrito.className = "cart";
    modalCarrito.innerHTML = ""     
    if(cart.length > 0) {
        cart.forEach((producto, indice) => {
            total = total + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito"
            carritoContainer.innerHTML = `
            <img class = "car-img" src="${producto.imagen}"/>
            <div class="product-details">
                ${producto.nombre}
            </div>
            <div class="product-details"> Cantidad: ${producto.cantidad}</div>
            <div class="product-details"> Precio: $ ${producto.precio}</div>
            <div class="product-details"> Subtotal: $ ${
                producto.precio * producto.cantidad
            }</div>
            <button class="btn btn-dark" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
            `;
            modalCarrito.appendChild(carritoContainer);
        })
        const totalContainer = document.createElement("div")
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `<div class = "total"> TOTAL $ ${total} </div>
        <button class = "btn btn-dark finalizar" id="finalizar" onClick = "finalizarCompra()"> FINALIZAR COMPRA </button>`
        modalCarrito.appendChild(totalContainer)

        localStorage.setItem("productos", JSON.stringify(cart)) 
    } else {
        modalCarrito.classList.remove("cart")
    }         
}




const removeProduct = (indice) => {
    cart.splice(indice, 1);
    dibujarCarrito();

}

function finalizarCompra () {
    const miStock = JSON.parse(localStorage.getItem("productos"))
    const nombreDeProductos = miStock.map(producto => producto.nombre)
    let p = document.createElement("p")
    p.innerText = `Usted selecciono los siguientes productos: ${nombreDeProductos}`

    modalCarrito.appendChild(p)
   
} 
 

//VERIFICACION MAYOR DE EDAD


