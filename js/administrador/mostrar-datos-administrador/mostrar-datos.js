const estructara_producto = (nombre, precio, imagen, id) => {
    const contenedor = document.createElement("div")

    contenedor.classList.add("contenedor-producto")

    const contenido = `
            <div class="imagen-editar">
           <a target='_blank' href="./eliminar-producto.html"> <img src="./static/img/section-products/icon-eliminar.svg" class="icon-eliminar"/></a>
          
            </div>
            <img src=${imagen}  class="imagen-producto" />
            <p class="name-product">${nombre}</p>
            <p class="price-product">${precio}</p>
            <a href="./producto.html?id=${id}" class="see-product" target="_blank">Ver producto</a>
            `
    contenedor.innerHTML = contenido;
    return contenedor;

}



export function mostrar_datos(informacion_producto) {
    console.log()
    for (let i = 0; i < informacion_producto.length; i++) {
        const elemento = informacion_producto[i];
        const estructura_elemento = estructara_producto(elemento.nombre, elemento.precio, elemento.imagen, elemento.id)
        const contenedor_productos = document.querySelector("[contenedor-productos]")
        contenedor_productos.appendChild(estructura_elemento)


    }
}

