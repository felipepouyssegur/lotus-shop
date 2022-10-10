// Validacion del formulario - Muestro primer Modal
      
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          modal.style.display = "block";
                
          const vacio = document.querySelector(".vacio")
          const emailUsuario = document.querySelector(".email-usuario").value;
          const nombreUsuario = document.querySelector(".nombre-usuario").value;
          const apellidoUsuario = document.querySelector(".apellido-usuario").value;
          const ciudadUsuario = document.querySelector(".ciudad-usuario").value;
          const provinciaUsuario = document.querySelector(".provincia-usuario").value;
          const postalUsuario = document.querySelector(".codigo-usuario").value;
              
              
          vacio.innerText = `E-mail: ${emailUsuario}
          Nombre: ${nombreUsuario}
          Apellido: ${apellidoUsuario}
          Ciudad: ${ciudadUsuario}
          Provincia: ${provinciaUsuario}
          Codigo Postal: ${postalUsuario}`
              
                
        
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


// Defino primer modal

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];






// Si el usuario toca la X se cierra.
span.onclick = function() {
  modal.style.display = "none";
}

// Si el usuario toca afuera se cierra.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Modal 2

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



//Animacion - Confirmacion

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




setTimeout(function() {
    let h5 = document.querySelector("#ultimo-vacio")
    h5.innerText = `Tu compra fue realizada exitosamente. Estaras recibiendo mas informacion en tu casilla de e-mail.`
    h5.classList.add("parrafo-final")
}, 2000);

}

//CODIGO TARJETA 

document.querySelector('.card-number-input').oninput = () =>{
  document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
  document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
  document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
  document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
  document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
  document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

//FOTO RANDOM A TARJETA Y BOTON

function pic() {
	var bgm= ['https://cdn.pixabay.com/photo/2022/09/07/21/23/ferris-wheel-7439636_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/12/09/21/11/jellyfish-5818601_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg', 'https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg', 'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029__340.jpg', 'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg', 'https://cdn.pixabay.com/photo/2016/09/08/12/00/stars-1654074__340.jpg', 'https://cdn.pixabay.com/photo/2017/06/13/13/55/marble-2398956__340.jpg', 'https://cdn.pixabay.com/photo/2016/03/18/15/02/ufo-1265186__340.jpg', 'https://cdn.pixabay.com/photo/2014/06/16/23/39/black-370118__340.png', 'https://cdn.pixabay.com/photo/2021/02/24/20/53/abstract-6047465__340.jpg', 'https://cdn.pixabay.com/photo/2016/10/26/15/20/graphics-1771704__340.jpg', 'https://cdn.pixabay.com/photo/2016/10/20/16/29/abstract-1755967__340.jpg', 'https://cdn.pixabay.com/photo/2018/12/18/22/30/background-3883188__340.jpg', 'https://cdn.pixabay.com/photo/2012/02/28/10/26/smoke-18275__340.jpg', 'https://cdn.pixabay.com/photo/2012/12/09/00/16/abstract-69124__340.jpg', 'https://cdn.pixabay.com/photo/2017/06/24/14/27/smoke-2437886__340.jpg', 'https://cdn.pixabay.com/photo/2020/11/13/16/51/white-walker-5739181__340.jpg', 'https://cdn.pixabay.com/photo/2018/06/06/18/20/trees-3458478__340.jpg', 'https://cdn.pixabay.com/photo/2017/10/06/01/52/fire-2821775__340.jpg'];
  const div = document.querySelector(".container .card-container .front")
  div.style.background = 'url('+bgm[Math.floor(Math.random()* bgm.length)]+') no-repeat'
  div.style.backgroundPosition = '100%'
  div.style.backgroundSize = 'cover' 
  

  const div2 = document.querySelector(".container .card-container .back")
  div2.style.background = div.style.background
  div2.style.backgroundPosition = '100%'
  div2.style.backgroundSize = 'cover' 


  document.querySelector("#myBtn3").style.background = div.style.background
}

pic();



//Deshabilito el boton hasta que el formulario de tarjeta sea completado.

function checkForm()
{
    let name = document.getElementById("name").value;
    let cansubmit = (name.length > 0);
    document.getElementById("myBtn3").disabled = !cansubmit;
};


