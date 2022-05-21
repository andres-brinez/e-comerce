
//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);

const estructara_producto = (nombre, precio, imagen, id) => {
    const contenedor = document.createElement("div")

    contenedor.classList.add("contenedor-producto")

    const contenido = `
            <div class="contenedor-image">
                <div class="contenedor-eliminar"> 
                    <a href="http://127.0.0.1:5501/inicio-administrador.html?administrador=True?id=${id}"> <img src="./static/img/section-products/icon-eliminar.svg" class="icon-eliminar"/></a>
                </div>
                <div class="contenedor-editar">
                <a target='_blank' href="./editar-producto.html"> <img src="./static/img/section-products/icon-editar.svg" class="icon-editar"/></a>
                </div>
                <img src=${imagen}  class="imagen-producto" />
            </div>
    
            <p class="name-product">${nombre}</p>
            <p class="price-product">${precio}</p>
            <a href="./producto.html?id=${id}" class="see-product" target="_blank">Ver producto</a>
            `
    contenedor.innerHTML = contenido;
    return contenedor;
}



export function informacion_productos_administrador(informacion_producto) {
    console.log()
    for (let i = 0; i < informacion_producto.length; i++) {
        const elemento = informacion_producto[i];
        const estructura_elemento = estructara_producto(elemento.nombre, elemento.precio, elemento.imagen, elemento.id)
        const contenedor_productos = document.querySelector("[contenedor-productos]")
        contenedor_productos.appendChild(estructura_elemento)


    }
}

