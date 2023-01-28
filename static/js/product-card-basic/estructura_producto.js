const estructura_producto = (imagen,nombre,precio,id) => {
    
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

export {estructura_producto} 
    


