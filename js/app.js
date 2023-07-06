

const productos= JSON.parse(localStorage.getItem("productos")) || [];        //defino la variable donde guardare los elementos de producto,
                                                                             //Utilizo Si ya tengo algo en productos que escriba en el siguiente O en caso de que no exista nada en el arreglo de productos que se cree un arreglo nuevo vacio



const cargarTabla = (nombre, descripcion, url, precio) => {
  const tabla = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
  const fila = document.createElement('tr');

  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = nombre;
  fila.appendChild(celdaNombre);

  const celdaDescripcion = document.createElement('td');
  celdaDescripcion.textContent = descripcion;
  fila.appendChild(celdaDescripcion);

  const celdaURL = document.createElement('td');
  celdaURL.textContent = url;
  fila.appendChild(celdaURL);

  const celdaPrecio = document.createElement('td');
  celdaPrecio.textContent = precio;
  fila.appendChild(celdaPrecio);

  tabla.appendChild(fila);
};



const crearProductos =(e)=> {

    e.preventDefault();             //para no refrescar la pantalla constantemente cada vez que presione el boton CREAR 

//traigo los datos del formulario 

const id = new Date().getTime();              //codigo que cambia todo el tiempo


const nombre = document.getElementById("nombreProducto").value;
const descripcion = document.getElementById("descripcionProducto").value;
const url = document.getElementById("URLProducto").value;
const precio = document.getElementById("precioProducto").value;


const item = {
    
    id,
    nombre,
    descripcion,
    url,
    precio


    
};

cargarTabla(nombre, descripcion, url, precio);

  // Restablecer los valores del formulario
  document.getElementById("nombreProducto").value = "";
  document.getElementById("descripcionProducto").value = "";
  document.getElementById("URLProducto").value = "";
  document.getElementById("precioProducto").value = "";

console.log(item);
productos.push(item);                                               //agregarlos al arreglo
localStorage.setItem("productos", JSON.stringify(productos))        //setearlos en local storage


};

const formulario = document.getElementsByClassName("formulario-crearProducto")[0];
formulario.addEventListener("submit", crearProductos);
