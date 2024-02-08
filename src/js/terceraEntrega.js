
//TRAIGO LOS PRODUCTOS QUE NECESITO
//el contenedor de los productos del index
const lista = document.querySelector("#lista");
//input de la barra de busqueda
const BusquedaInput = document.querySelector(`.barra`)
const resBusqueda = document.querySelector(`.resultadoBusqueda`)
const inputIndex = document.querySelector(`.container_busqueda`)
const productosIndex = document.querySelector(`.div-tit-p`)
const productoAmpleado = document.querySelector(`#vista-previa`)

let data;
const pedirProductos = async () => {
  const resp = await fetch("./js/productos.json");
   data = await resp.json();
   productoAmpleado.style.display = "none";
  data.forEach((producto) => {
    const div = document.createElement("div");
    if (producto.descuento) {
      div.innerHTML = `
        <div class="container-card">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${producto.img} alt="Producto">
            <div class="card-body">
              <p class="p-descuento">${producto.porcentaje}% OFF</p>
              <h5 class="card-title">${producto.nombre}</h5>
              <h2 class="card-price">Precio: $ ${producto.precio}</h2>
              <button class="boton-carrito bi bi-cart" data-producto='${JSON.stringify(producto)}'></button>
            </div>
          </div>
        </div>`;
    } else {
      div.innerHTML = `
        <div class="container-card">
          <div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${producto.img} alt="Producto">
            <div class="card-body">
              <p class="p-descuento">0% OFF</p>
              <h5 class="card-title">${producto.nombre}</h5>
              <h2 class="card-price">Precio:<span>$</span> ${producto.precio}</h2>
              <button class="boton-carrito bi bi-cart" data-producto='${JSON.stringify(producto)}'></button>
            </div>
          </div>
        </div>`;
    }
     // Agrego el evento al contenedor de cada producto individualmente
     div.addEventListener("click", (event) => {
       // Verifica si el clic proviene del botón-carrito
      if (!event.target.classList.contains("boton-carrito")) {
        abrir(producto);
      eventoAbrir(producto)
      }
    });

    // Agrego el evento al botón de cada producto
    const botonCarrito = div.querySelector(".boton-carrito");
    botonCarrito.addEventListener("click", (event) => {
      // Detiene la propagación del evento para que no llegue al contenedor
      event.stopPropagation();

      const productoSeleccionado = JSON.parse(
        //obtengo el producto asociado al boton
        botonCarrito.getAttribute("data-producto")
      );
      //agrego el producto al local storage
      const productosGuardados =
        JSON.parse(localStorage.getItem("data")) || [];
      productosGuardados.push(productoSeleccionado);
      localStorage.setItem("data", JSON.stringify(productosGuardados));
    });

    lista.append(div);
  });
};
pedirProductos();


//BARRA DE BUSQUEDA


// Añade el contenedor para los resultados de búsqueda antes de resBusqueda
const resultadosContainer = document.querySelector(`.resultadoBusqueda`)
const parentElement = resBusqueda.parentElement;
parentElement.insertBefore(resultadosContainer, resBusqueda.nextSibling);

// Añade el evento de escucha al input de búsqueda
BusquedaInput.addEventListener('input', () => {
  const terminoBusqueda = BusquedaInput.value.toLowerCase();

  // Resto del código para filtrar productos
  const productosFiltrados = data.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda));

  // Limpia el contenido actual del contenedor de resultados
  resultadosContainer.innerHTML = '';

  // Verifica si hay algún término de búsqueda antes de mostrar los resultados
  if (terminoBusqueda.trim() !== '') {
    // Muestra los productos filtrados en el contenedor de resultados
    productosFiltrados.forEach(producto => {
      const divResultado = document.createElement("li");

      // creación de productos de muestra
      divResultado.innerHTML = `
        <div class="productosBusqueda">
          <img src=${producto.img} width="60px" alt="Producto">
          <div class="busqueda-item">
            <h4 class="busqueda-titulo">${producto.nombre}</h4>
            <p class="busqueda-precio">$${producto.precio}</p>
          </div>
        </div>`;

      // Agrega el evento click a cada elemento de resultado de búsqueda
      divResultado.addEventListener('click', () => {
        // Ejecuta la función ampliar al hacer clic y pasa el producto como parámetro
        abrir(producto);
        eventoAbrir(producto);
      });

      resultadosContainer.appendChild(divResultado);
    });
  }
});

// ...


// Producto Ampliado
function abrir(producto) {
  // Establece la posición de desplazamiento al principio de la página, sin esto al oprimir los productos del home, me deja al final de la pagina donde se encuentra la descrip
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // O 'auto' para un desplazamiento instantáneo
  });
  productoAmpleado.innerHTML = "";
  lista.style.display = "none";
  inputIndex.style.display = 'none';
  productosIndex.style.display = 'none';
  productoAmpleado.style.display = "grid";
  productoAmpleado.innerHTML = `
      <h1>${producto.nombre}</h1>
      <img src=${producto.img} alt="productos">
      <h3> Descripcion: </h3>
      <p>${producto.descripcion}</p>
      <p class="precio"><span>Precio: <span>$ ${producto.precio}</p>
      <button class="boton-carrito bi bi-cart" id="botonCarritoAmpliado" data-producto='${JSON.stringify(producto)}'></button>
  `;
}
function eventoAbrir(producto){
  // Agrego el evento click al botón, lo mismo que hago al final de la funcion pedirProductos
  const botonCarritoAmpliado = document.getElementById('botonCarritoAmpliado');
  botonCarritoAmpliado.addEventListener('click', () => {
    const productoSeleccionado = JSON.parse(botonCarritoAmpliado.getAttribute('data-producto'));
    const productosGuardados = JSON.parse(localStorage.getItem('data')) || [];
    productosGuardados.push(productoSeleccionado);
    localStorage.setItem('data', JSON.stringify(productosGuardados));
  });
}

