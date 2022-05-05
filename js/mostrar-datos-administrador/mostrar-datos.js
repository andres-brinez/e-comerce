const estructara_producto = (nombre, precio, imagen,id) => {
    const contenedor = document.createElement("div")
    
    contenedor.classList.add("contenedor-producto")

    const contenido = `
            <div class="imagen-editar">
            <a href="./editar-producto.html?id=${id}"><img src="./static/img/section-products/icon-eliminar.svg" class="icon-eliminar"/></a>
            <a href="./editar-producto.html?id=${id}"><img src="./static/img/section-products/icon-editar.svg" class="icon-editar"/></a>
            <img src=${imagen}  class="imagen-producto" />
            </div>
            <p class="name-product">${nombre}</p>
            <p class="price-product">${precio}</p>
            <a href="./producto.html" class="see-product" target="_blank">Ver producto</a>
            `
    contenedor.innerHTML = contenido;
    return contenedor;
 
}


export function mostrar_datos(informacion_producto){
    
    for (let i = 0; i < informacion_producto.length; i++) {
        const elemento = informacion_producto[i];
        const estructura_elemento = estructara_producto(elemento.nombre, elemento.precio, elemento.imagen,elemento.id)
        const contenedor_productos = document.querySelector("[contenedor-productos]")
        contenedor_productos.appendChild(estructura_elemento)
        
    }   
}