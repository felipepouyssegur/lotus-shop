
//CREO CARDS DE TIENDA.HTML
const traigoJson = async()=> {
  const respuesta = await fetch ('../stock.json')
  const data = await respuesta.json()

  let contenedor = document.getElementById("container")

  data.forEach((producto, indice) => {

  let card = document.createElement("div")

  card.classList.add("col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "hide", `${producto.deporte}`, "products")
  card.innerHTML = `<div class="glasses_box">
      <figure><img src="${producto.imagen}" alt="esta es una foto de ${producto.nombre}"/></figure>
      <h3><span class="blu">$</span>${producto.precio}</h3>
      <p class="product-name">${producto.nombre}</p>
      <button type="button" class="btn btn-outline-secondary boton-comprar" id="asd" onClick = "agregarAlCarrito (${indice})">COMPRAR</button>
   </div>`
  contenedor.appendChild(card)
  
  producto.card = card;
})

//BUSQUEDA EN TIEMPO REAL
const searchInput = document.getElementById("search-input")
const card = document.querySelectorAll(".products")

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()

  data.forEach(producto => {
    const isVisible =
      producto.nombre.toLowerCase().includes(value) ||
      producto.deporte.toLowerCase().includes(value)

    producto.card.classList.toggle("hide", !isVisible)

  })
})

}

traigoJson()



/* const crearCards = () => {

  let contenedor = document.getElementById("container")

  productos.forEach((producto, indice) => {

    let card = document.createElement("div")

    card.classList.add("col-xl-3", "col-lg-3", "col-md-6", "col-sm-6", "hide", `${producto.deporte}`, "products")

    card.innerHTML = `<div class="glasses_box">
        <figure><img src="${producto.imagen}" alt="esta es una foto de ${producto.nombre}"/></figure>
        <h3><span class="blu">$</span>${producto.precio}</h3>
        <p class="product-name">${producto.nombre}</p>
        <button type="button" class="btn btn-outline-secondary boton-comprar" id="asd" onClick = "agregarAlCarrito (${indice})">COMPRAR</button>
     </div>`

    contenedor.appendChild(card)
    
    producto.card = card;

  })
}


crearCards(); */


//CREO CARRITO 

let cart = [];
let modalCarrito = document.getElementById("cart")
let contadorCarrito = 0;


const agregarAlCarrito = async(indice)=>  {
  const respuesta = await fetch ('../stock.json')
  const data = await respuesta.json()

    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
        return elemento.id === data[indice].id
    })
    if (indiceEncontradoCarrito === -1) {
        const productoAgregar = data[indice]
        productoAgregar.cantidad = 1
        cart.push(productoAgregar)
        dibujarCarrito()
    }else {
        cart[indiceEncontradoCarrito].cantidad += 1
        dibujarCarrito()
    }

    contadorCarrito++ // operador avanzado

    Toastify({
        text: `Producto agregado al carrito.`,
        duration: 1500,
        style: {
            background: "linear-gradient(90deg, rgba(255,255,255,0.7231267507002801) 0%, rgba(79,79,79,1) 0%, rgba(0,0,0,1) 100%)",
          },
        }).showToast();
};




const dibujarCarrito = () => {
    modalCarrito.className = "cart";
    modalCarrito.innerHTML = ""     
    if(cart.length > 0) {
        cart.forEach((producto, indice) => {
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito"
            carritoContainer.innerHTML = `
            <img class = "car-img" src="${producto.imagen}"/>
            <div class="product-details>
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
        
        let initialTotal = 0;
        const grandTotal = cart.reduce((previousValue, currentItem) => previousValue + (currentItem.precio * currentItem.cantidad),
        initialTotal);

        const totalContainer = document.createElement("div")
        totalContainer.className = "total-carrito";
        totalContainer.innerHTML = `<div class = "total"> TOTAL $ ${grandTotal} </div>
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

    contadorCarrito--
}

function vaciarCarrito (indice) {
  cart.splice (indice, 100000)
  dibujarCarrito()
}


//DESAFIO


const modal = document.getElementById("myModal");


const span = document.getElementsByClassName("close")[0];


function finalizarCompra () {

modal.style.display = "block";
vaciarCarrito() 

document.getElementById("button-close").click()

const btn2 = document.querySelector("#myBtn2")

btn2.onclick = function () {
modal.style.display = "none"
let edadUsuario = document.querySelector(".edadUsuario").value
edadUsuario >= 18 ?      

Toastify({
    text: `Felicitaciones, su compra fue realizada con exito`,
    duration: 2500,
    style: {
        background: "linear-gradient(86deg, rgba(255,255,255,0.7231267507002801) 0%, rgba(0,255,11,1) 0%, rgba(198,255,209,1) 0%, rgba(51,249,0,1) 100%)",
      },
    }).showToast()  
    
    
    :Toastify({
        text: `¡ATENCION! Debes ser mayor de edad para realizar la compra.`,
        duration: 2500,
        style: {
            background: "linear-gradient(86deg, rgba(255,255,255,0.7231267507002801) 0%, rgba(0,255,11,1) 0%, rgba(255,0,0,1) 0%, rgba(255,140,140,1) 100%)",
          },
        }).showToast();
} }
 

// SI EL USUARIO TOCA LA X SE CIERRA
span.onclick = function() {
    modal.style.display = "none";
  }
  
//SI EL USUSARIO TOCA AFUERA SE CIERRA
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  

//FILTROS

  //Parametro que envia el boton
  function filterProduct(value) {
    //Traigo clases del boton
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //checkeo si  el valor es igual al InnerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //Selecciono todas las cards
    let elements = document.querySelectorAll(".products");
    //Loopeo y recorro las cards
    elements.forEach((element) => {
      //Si el boton "ALL esta clickeado, elimino la clase HIDE"
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Checkeo si contiene la clase striking/grappling
        if (element.classList.contains(value)) {
          //Muestro elemento en base a su categoria
          element.classList.remove("hide");
        } else {
          //Escondo a los otros elementos
          element.classList.add("hide");
        }
      }
    });
  }


//Muestro todos los productos cuando carga la pagina.
  window.onload = () => {
    filterProduct("all");
  };







