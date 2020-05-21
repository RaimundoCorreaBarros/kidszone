let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if ( alturaAnimado < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("animadoArriba");
        }
    }
};



window.addEventListener('scroll', mostrarScroll)