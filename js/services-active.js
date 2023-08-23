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




// Primer carrusel
const gridPort = document.getElementById('grid-experience-portafolio');
const itemImgPort = document.getElementById('carrusel-portafolio');
const imagesPort = itemImgPort.querySelectorAll('img');

let currentIndexPort = 0;
let intervalIdPort = null;

function showImagePort(index) {
  imagesPort.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

function nextImagePort() {
  currentIndexPort = (currentIndexPort + 1) % imagesPort.length;
  showImagePort(currentIndexPort);
}

gridPort.addEventListener('mouseenter', () => {
  intervalIdPort = setInterval(nextImagePort, 4000);
});

gridPort.addEventListener('mouseleave', () => {
  clearInterval(intervalIdPort);
  currentIndexPort = 0; // Regresar al primer índice cuando el cursor sale
  showImagePort(currentIndexPort); // Mostrar la primera imagen
});

showImagePort(currentIndexPort);




// Segundo carrusel
const gridMacuin = document.getElementById('grid-experience-macuin');
const itemImgMacuin = document.getElementById('carrusel-macuin');
const imagesMacuin = itemImgMacuin.querySelectorAll('img');

let currentIndexMacuin = 0;
let intervalIdMacuin = null;

function showImageMacuin(index) {
  imagesMacuin.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

function nextImageMacuin() {
  currentIndexMacuin = (currentIndexMacuin + 1) % imagesMacuin.length;
  showImageMacuin(currentIndexMacuin);
}

gridMacuin.addEventListener('mouseenter', () => {
  intervalIdMacuin = setInterval(nextImageMacuin, 4000);
});

gridMacuin.addEventListener('mouseleave', () => {
  clearInterval(intervalIdMacuin);
  currentIndexMacuin = 0; // Regresar al primer índice cuando el cursor sale
  showImageMacuin(currentIndexMacuin); // Mostrar la primera imagen
});

showImageMacuin(currentIndexMacuin);


// tercer carrusel
const gridAuti = document.getElementById('grid-experience-auti');
const itemImgAuti = document.getElementById('carrusel-auti');
const imagesAuti = itemImgAuti.querySelectorAll('img');

let currentIndexAuti = 0;
let intervalIdAuti = null;

function showImageAuti(index) {
  imagesAuti.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

function nextImageAuti() {
  currentIndexAuti = (currentIndexAuti + 1) % imagesAuti.length;
  showImageAuti(currentIndexAuti);
}

gridAuti.addEventListener('mouseenter', () => {
  intervalIdAuti = setInterval(nextImageAuti, 4000);
});

gridAuti.addEventListener('mouseleave', () => {
  clearInterval(intervalIdAuti);
  currentIndexAuti = 0; // Regresar al primer índice cuando el cursor sale
  showImageAuti(currentIndexAuti); // Mostrar la primera imagen
});

showImageAuti(currentIndexAuti);



// cuarto carrusel
const gridTodo = document.getElementById('grid-experience-todo');
const itemImgTodo = document.getElementById('carrusel-todo');
const imagesTodo = itemImgTodo.querySelectorAll('img');

let currentIndexTodo = 0;
let intervalIdTodo = null;

function showImageTodo(index) {
  imagesTodo.forEach((img, i) => {
    if (i === index) {
      img.classList.add('active');
    } else {
      img.classList.remove('active');
    }
  });
}

function nextImageTodo() {
  currentIndexTodo = (currentIndexTodo + 1) % imagesTodo.length;
  showImageTodo(currentIndexTodo);
}

gridTodo.addEventListener('mouseenter', () => {
  intervalIdTodo = setInterval(nextImageTodo, 4000);
});

gridTodo.addEventListener('mouseleave', () => {
  clearInterval(intervalIdTodo);
  currentIndexTodo = 0; // Regresar al primer índice cuando el cursor sale
  showImageTodo(currentIndexTodo); // Mostrar la primera imagen
});

showImageTodo(currentIndexTodo);
