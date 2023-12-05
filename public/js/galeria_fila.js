var margin = 0;
var fotos_fila = document.querySelector(".fotos_fila");
var fotos = fotos_fila.querySelectorAll(".box_imagen_galeria_fila").length;
var contador = 0;
var galeria = document.querySelector(".galeria_fotos_fila");

var x;
var bandera1;
var bandera2;
var bandera_over = true;
contar();

document.querySelector(".flecha2_fila").addEventListener("click", () => {
  adelante();
});

function adelante() {
  contador += 1;
  if (contador <= fotos - 1) {
    let elemento = document.querySelector(".box_imagen_galeria_fila");
    let ancho = window.getComputedStyle(elemento).width;
    margin -= parseFloat(ancho);
    document.querySelector(".fotos_fila").style.marginLeft = `${margin}px`;
    contar();
  } else {
    contador = fotos - 1;
  }
}
document.querySelector(".flecha1_fila").addEventListener("click", () => {
  atras();
});

function atras() {
  contador -= 1;
  if (contador >= 0) {
    let elemento = document.querySelector(".box_imagen_galeria_fila");
    let ancho = window.getComputedStyle(elemento).width;
    margin += parseFloat(ancho);
    document.querySelector(".fotos_fila").style.marginLeft = `${margin}px`;
    contar();
  } else {
    contador = 0;
  }
}
var elemento = document.querySelector(".galeria_fotos_fila");
elemento.addEventListener("touchstart", function (event) {
  x = event.touches[0].clientX;
});
elemento.addEventListener("touchmove", function (event) {
  bandera1 = false;
  bandera2 = false;
  if (event.touches[0].clientX < x - 50) {
    bandera1 = true;
    bandera2 = false;
  }
  if (event.touches[0].clientX > x + 50) {
    bandera1 = false;
    bandera2 = true;
  }
  if (event.touches[0].clientX == x) {
    bandera1 = false;
    bandera2 = false;
  }
});
elemento.addEventListener("touchend", function (event) {
  if (bandera1 == true) {
    adelante();
  }
  if (bandera2 == true) {
    atras();
  }
});
function contar() {
  galeria.querySelector(".contador_galeria_fila").innerHTML = `<p>${
    contador + 1
  }/${fotos}</p>`;
}
if (screen.availWidth > 900) {
  setTimeout(autoplay, 3000);
}
function autoplay() {
  if (bandera_over == true) {
    if (contador <= fotos - 2) {
      adelante();
    } else {
      document.querySelector(".fotos_fila").style.marginLeft = `0px`;
      contador = 0;
      margin = 0;
      contar();
    }
  }
  setTimeout(autoplay, 3000);
}
document.querySelector(".galeria_fotos_fila").onmouseover = function (event) {
  bandera_over = false;
};
document.querySelector(".galeria_fotos_fila").onmouseout = function (event) {
  bandera_over = true;
};
