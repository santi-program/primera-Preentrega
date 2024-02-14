//carrito de compras
const array = JSON.parse(localStorage.getItem("data")) || [];

//elementos del html
const carrito = document.querySelector(`.carrito-precio-total`);


document.addEventListener('DOMContentLoaded', function() {
  // TRAIGO LOS PRODUCTOS QUE NECESITO
  const productosSeleccionadosDiv = document.querySelector(`#productos-seleccionados`);

  // Limpiar el carrito antes de agregar los productos
  productosSeleccionadosDiv.innerHTML = '';

  // Itero sobre cada producto del local
  array.forEach((productoSeleccionado, index) => {
      // Inicializar la cantidad si no existe
      if (!productoSeleccionado.hasOwnProperty('cantidad')) {
          productoSeleccionado.cantidad = 1;
      }

      // Mostrar el producto seleccionado en el carrito
      const nuevoProductoDiv = document.createElement('div');
      nuevoProductoDiv.classList.add('carrito-item');
      nuevoProductoDiv.innerHTML = `
          <img src=${productoSeleccionado.img} width="80px" alt="Producto">
          <div class="carrito-item-detalles">
              <h5 class="carrito-item-titulo">${productoSeleccionado.nombre}</h5>
              <div class="selector-cantidad">
                  <i class="fa-solid fa-minus restar-cantidad"></i>
                  <input type="text" value="${productoSeleccionado.cantidad}" class="carrito-item-cantidad" disabled>
                  <i class="fa-solid fa-plus sumar-cantidad"></i>
              </div>
              <h2 class="carrito-item-precio">Precio:<span>$</span>${productoSeleccionado.precio}</h2>
          </div>
          <button class="btn-eliminar">
              <i class="fa-solid fa-trash"></i>
          </button>`;

      productosSeleccionadosDiv.appendChild(nuevoProductoDiv);

      // Agregar event listener al botón eliminar
      const btnEliminar = nuevoProductoDiv.querySelector('.btn-eliminar');
      btnEliminar.addEventListener('click', () => {
          // Eliminar elemento del array
          array.splice(index, 1);
          // Actualizar localStorage
          localStorage.setItem('data', JSON.stringify(array));
          // Eliminar elemento del DOM
          nuevoProductoDiv.remove();
          // Recalcular total del carrito
          actualizarTotal();
          showMessage("Eliminaste un Producto","error");
      });

      // Agregar event listener para restar cantidad
      const restarCantidadBtn = nuevoProductoDiv.querySelector('.restar-cantidad');
      restarCantidadBtn.addEventListener('click', () => {
          if (productoSeleccionado.cantidad > 1) {
              productoSeleccionado.cantidad--;
              actualizarCantidad();
              showMessage("Restaste un Producto", "error");
          }
      });

      // Agregar event listener para sumar cantidad
      const sumarCantidadBtn = nuevoProductoDiv.querySelector('.sumar-cantidad');
      sumarCantidadBtn.addEventListener('click', () => {
          productoSeleccionado.cantidad++;
          actualizarCantidad();
          showMessage("Sumaste un Producto");
      });

      // Función para actualizar la cantidad en el HTML y en el localStorage
      function actualizarCantidad() {
          const cantidadInput = nuevoProductoDiv.querySelector('.carrito-item-cantidad');
          cantidadInput.value = productoSeleccionado.cantidad;
          // Actualizar localStorage
          localStorage.setItem('data', JSON.stringify(array));
          // Recalcular total del carrito
          actualizarTotal();
      }
  });

  // Función para actualizar el total del carrito
  function actualizarTotal() {
      const resultado = array.reduce((acumulado, producto) => {
          return acumulado + producto.precio * producto.cantidad;
      }, 0);
      carrito.textContent = `$${resultado.toFixed(2)}`;
  }

  // Calcular total del carrito al cargar la página
  actualizarTotal();
});

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(productoNuevo) {
  // Buscar si ya existe el producto en el carrito
  const productoExistente = array.find(producto => producto.id === productoNuevo.id);
  if (productoExistente) {
      // Si ya existe, solo actualizar la cantidad
      productoExistente.cantidad++;
  } else {
      // Si no existe, agregarlo al carrito
      array.push({ ...productoNuevo, cantidad: 1 });
  }
  // Actualizar localStorage
  localStorage.setItem('data', JSON.stringify(array));
}

//evento para vaciar el carrito
const totalPagar = document.querySelector(`.btn-pagar`)
totalPagar.addEventListener(`click`, () => {
  // Eliminar todos los productos del localStorage
  localStorage.removeItem('data');
  //borro los elementos del dom
  const productosSeleccionadosDiv = document.querySelector('#productos-seleccionados');
    productosSeleccionadosDiv.innerHTML = '';

    const carrito = document.querySelector('.carrito-precio-total');
    carrito.textContent = '$0.00';
    alert();
})
function alert() {
    Swal.fire({
        title: "Compra Realizada!!",
        text: "Te enviaremos un mail con los datos de tu envio!",
        icon: "success"
      });
} 

function showMessage(message, type = "success") {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: type === "success" ? "green" : "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}


const btnSwitch = document.querySelector(`#switch`);

btnSwitch.addEventListener(`click`, () => {
  document.body.classList.toggle(`dark`);
  btnSwitch.classList.toggle(`active`);

})
