// se encarga de  la estructura del producto 

const estructura_producto = (nombre, precio, imagen, id) => {
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


export function informacion_producto(informacion_producto, contenedor_producto,) {
    
    for (let i = 0; i < informacion_producto.length; i++) {
        const elemento = informacion_producto[i];
        const estructura_elemento=estructura_producto(elemento.nombre, elemento.precio, elemento.imagen, elemento.id)
        contenedor_producto.appendChild(estructura_elemento)

    }

}




