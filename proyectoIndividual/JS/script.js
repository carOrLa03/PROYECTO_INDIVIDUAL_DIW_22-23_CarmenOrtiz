// JS PARA EL CARROUSEL

const grande = document.querySelector(".carrusel_grande");
const punto = document.querySelectorAll(".puntos_li");

//  asignar click a los puntos
//  saber su posicion
// aplicar un transform translateX al grande
// quitar la clase activo a todos los puntos
// añadir la clase activo al punto que hemos hecho click

punto.forEach((cadaPunto, i) => {
  punto[i].addEventListener("click", () => {
    // si posicion es 0 transformX es 0
    // si posicion es 1 transformX es -33%

    let posicion = i;
    let operacion = posicion * -33;
    grande.style.transform = `translateX(${operacion}%)`;
    punto.forEach((cadaPunto, i) => {
      punto[i].classList.remove("activo");
    });
    punto[i].classList.add("activo");
  });
});

// cuando haga click le añado y quito la clase
const btnMenu = document.querySelector(".button_responsive");
const navegador = document.querySelector(".header__nav_lista");

btnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hola");
  navegador.classList.toggle("header__nav_lista--ver");
});
