//esto trae  la  informacion del producto por el id que tenga el producto
// es  lo que se ve al dar click en el boton ver  producto


//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);
//searchParams.get de la  url nos trae el elemento que especifivamos 
const id = url.searchParams.get('id');

//producto da todo el elemento del api con el id enviado 
//con el numero que empieza el id  nos  indica de que categoria es 
if (id.indexOf(2.) == 0) {
    detalle_producto(id, 'consolas').then((producto) =>
        cambiar_valores(producto), productos_similares_json('consolas'))

}
else if (id.indexOf(1.) == 0) {
    detalle_producto(id, 'start_wars').then((producto) =>
        cambiar_valores(producto), productos_similares_json('start_wars'))
}
else if (id.indexOf(3.) == 0) {
    detalle_producto(id, 'diversos').then((producto) =>
        cambiar_valores(producto), productos_similares_json('diversos'))
}

function detalle_producto(id, categoria) {
    return fetch(`https://productos-ecomerce.herokuapp.com/${categoria}/${id}`).then(response => response.json()
    )
}

const titulo = document.getElementsByTagName('title')[0]
const imagen_producto = document.querySelector('.producto-imagen')
const precio_producto = document.querySelector('.producto-precio')
const nombre_producto = document.querySelector('.nombre-producto')


function cambiar_valores(producto) {
    titulo.textContent = producto.nombre
    nombre_producto.textContent = producto.nombre
    imagen_producto.src = producto.imagen
    imagen_producto.alt = producto.nombre
    precio_producto.textContent = producto.precio

}

//crear  la  parte de  productos similares

function productos_similares_json(categoria) {
    
    // trae  los datos del servidor
    const informacion_productos = new XMLHttpRequest()
    informacion_productos.open('GET', `https://productos-ecomerce.herokuapp.com/${categoria}`,)
    informacion_productos.send();

    //para ver  la respuesta del servidor  a la peticion cuando cargue 
    informacion_productos.onload = () => {

        //lo que recibimos del servidor es texto,por eso debemos pasarlo a algo que  js pueda manejas (array)
        //eso se hace con JSON.parse
        const datos_productos = JSON.parse(informacion_productos.response) //trae la respuesta del  servidor
        
        const contenedor_productos = document.querySelector('.contenedor-produtos')
        mostrar_datos(datos_productos,contenedor_productos)
    }

    
function mostrar_datos(informacion_producto,contenedor_producto){
   
    for (let i = 0; i < informacion_producto.length; i++) {
        const elemento = informacion_producto[i];
        const estructura_elemento = estructara_productos_similares(elemento.nombre, elemento.precio, elemento.imagen,elemento.id)
        contenedor_producto.appendChild(estructura_elemento)
    }
}
    
}


const estructara_productos_similares = (nombre, precio, imagen,id) => {
    const contenedor = document.createElement("div")
    contenedor.classList.add("contenedor-producto")
    const contenido = `
            <img src=${imagen} />
            <p class="name-product">${nombre}</p>
            <p class="price-product">${precio}</p>
            <a href="./producto.html?id=${id}" class="see-product" target="_blank">Ver producto</a>
    `
    contenedor.innerHTML = contenido;
    return contenedor;
}
