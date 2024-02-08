//carrito de compras

// TRAIGO EL LOCAL STORAGE
const array = JSON.parse(localStorage.getItem("data")) || [];

//elementos del html
const carrito = document.querySelector(`.carrito-precio-total`);

document.addEventListener('DOMContentLoaded', function() {
  // TRAIGO LOS PRODUCTOS QUE NECESITO
  const productosSeleccionadosDiv = document.querySelector(`#productos-seleccionados`);

  //itero sobre cada producto del local
    array.forEach(productoSeleccionado => {
      // Mostrar el producto seleccionado en el carrito
      const nuevoProductoDiv = document.createElement('div');
      nuevoProductoDiv.innerHTML = `
        <div class="carrito-item">
          <img src=${productoSeleccionado.img} width="80px" alt="Producto">
          <div class="carrito-item-detalles">
            <h5 class="carrito-item-titulo">${productoSeleccionado.nombre}</h5>
            <div class="selector-cantidad">
              <i class="fa-solid fa-minus restar-cantidad"></i>
              <input type="text" value="1" class="carrito-item-cantidad" disabled>
              <i class="fa-solid fa-plus sumar-cantidad"></i>
            </div>
            <h2 class="carrito-item-precio">Precio:<span>$</span>${productoSeleccionado.precio}</h2>
          </div>
          <button class="btn-eliminar">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>`;

      productosSeleccionadosDiv.appendChild(nuevoProductoDiv);
    });
});

//reduce para obtener el total de los precios de productos
const resultado = array.reduce((acumulado, producto)=>{
    return acumulado + producto.precio
}, 0)

carrito.textContent = `$${resultado.toFixed(2)}`;
