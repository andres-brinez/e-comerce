const estructura_producto = (categoria,imagen,nombre,precio,id) => {
    
    const contenedor = document.createElement("div")
    contenedor.classList.add("contenedor-producto")
    const contenido = `
            <img src=${imagen} />
            <p class="name-product">${nombre}</p>
            <p class="price-product">${precio}</p>
            <a href="#Category=${categoria}/productoID=${id}" class="see-product" >Ver producto</a>
    `
    contenedor.innerHTML = contenido;
    return contenedor;
}

export {estructura_producto} 
    
// target="_blank"

