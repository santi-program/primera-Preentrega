/* 
    se debe entregar: 
        -estructura HTML del proyecto
        -variables de js necesarias
        -funciones esenciales del proceso a simular
        -objetos de js
        -arrays
        -metodos de busqueda y filtrado sobre el array
 */


const products = [];

//objetos disponibles
const objectsAvailable = [
    {name: "iphone 14 pro", price: 1200},
    {name: "iphone 13 pro", price: 900},
    {name: "iphone 12 pro", price: 700},
];
//Funcion para mostrar objetos al usuario
function ShowObjects() {
    let available = "objetos disponibles: \n";
    for (let i = 0; i < objectsAvailable.length; i++) {
        available += `${i + 1}. ${objectsAvailable[i].name}. = $${objectsAvailable[i].price}\n`;
    }
    alert(available);
}
ShowObjects();

//bucle para pedirle al usuario todos los productos que desea agregar
let continueAdding = true;

while (continueAdding) {
    let indexSelected = prompt("Ingrese el número del objeto que desea agregar o escriba 'stop' para detenerse:");

    if (indexSelected.toLowerCase() === 'stop') {
        continueAdding = false;
    } else if (indexSelected >= 1 && indexSelected <= objectsAvailable.length) {
        const selectedObject = objectsAvailable[indexSelected - 1];
        products.push(selectedObject);
        console.log(products);
    } else {
        console.log("Seleccionaste un número inválido. Ingresa un número válido o escribe 'stop' para detenerte.");
    }
}
//funcion para saber el total de los productos seleccionados
function totalPrice (){
    const total = products.reduce((accum, producto) => {
        return accum + producto.price
    }, 0);
    console.log(`El total de los productos seleccionados es de $${total}`);
}

totalPrice();

// una vez que pueda mostrar por pantalla colocare un boton que sea limpiar carrito que le colocare el evento de  array vacio productos[];




