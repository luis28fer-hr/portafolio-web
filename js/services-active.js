const elementos = document.querySelectorAll('.card-item');

elementos.forEach(elemento => {
  elemento.addEventListener('mouseenter', () => {
    let elementoAbajo;

    elementos.forEach(el => el.classList.remove('activo'));
    elemento.classList.add('activo');

    let contador = 0;
    let siguienteElemento = elemento.nextElementSibling;
    while (siguienteElemento) {
      contador++;
      if (contador === 4) {
        elementoAbajo = siguienteElemento;
        break;
      }
      siguienteElemento = siguienteElemento.nextElementSibling;
    }
  
    if (elementoAbajo) {
      elementoAbajo.classList.add('activoAbajo');
    }

  });  
});

const contenedor = document.getElementById('containerCards');

contenedor.addEventListener('mouseleave', () => {
    elementos.forEach(el => el.classList.remove('activoAbajo'));
    elementos.forEach(el => el.classList.remove('activo'));

  });