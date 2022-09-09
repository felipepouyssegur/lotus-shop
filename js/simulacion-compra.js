
const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];




btn.onclick = function() {
  modal.style.display = "block";
  
  const vacio = document.querySelector(".vacio")
  const emailUsuario = document.querySelector("#inputEmail4").value;
  const direccionUsuario = document.querySelector("#inputDireccion").value;
  const ciudadUsuario = document.querySelector("#inputCiudad").value;
  const provinciaUsuario = document.querySelector("#inputProvincia").value;
  const postalUsuario = document.querySelector("#inputPostal").value;


  vacio.innerText = `E-mail: ${emailUsuario}
  Direccion: ${direccionUsuario}
  Ciudad: ${ciudadUsuario}
  Provincia: ${provinciaUsuario}
  Codigo Postal: ${postalUsuario}`

  


  return false 
}

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



// MODAL 2

const btn2 = document.getElementById("myBtn2")

const modal2 = document.getElementById("myModal2");

const span2 = document.getElementsByClassName("close2")[0];




btn2.onclick = function () {
    modal.style.display = "none";

    modal2.style.display = "block";

}

span2.onclick = function() {
    modal2.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
  }



//INTENTO ANIMACION

const btn3 = document.querySelector("#myBtn3")

const padreAnimation = document.querySelector("#padreAnimation")

const spanAnimation = document.querySelector("#spanAnimation")
const spanAnimation2 = document.querySelector("#spanAnimation2")

const classAnimation = document.querySelector("#classAnimation")
const classAnimation2 = document.querySelector("#classAnimation2")



btn3.onclick = function () {

padreAnimation.classList.add("swal-icon", "swal-icon--success")

spanAnimation.classList.add("swal-icon--success__line", "swal-icon--success__line--long")
spanAnimation2.classList.add("swal-icon--success__line", "swal-icon--success__line--tip")

classAnimation.classList.add("swal-icon--success__ring")
classAnimation2.classList.add("swal-icon--success__hide-corners")

const h5 = document.querySelector("#ultimo-vacio")


setTimeout(function() {
    h5.innerText = `Tu compra fue realizada exitosamente. Estaras recibiendo mas informacion en tu casilla de e-mail.`
}, 2000);

}

  