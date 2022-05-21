
//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);

const estructara_producto = (nombre, precio, imagen, id,administrador) => {
    const contenedor = document.createElement("div")
   
    contenedor.classList.add("contenedor-producto")

    const contenido = `
            <div class="contenedor-image">
                <div class="contenedor-eliminar"> 
                    <a href="./inicio-administrador.html?administrador=${administrador}&id=${id}&nombre=${nombre}&imagen=${imagen}"> <img src="./static/img/section-products/icon-eliminar.svg" class="icon-eliminar"/></a>
                </div>
                <div class="contenedor-editar">             
                <a target='_blank' href="./editar-producto.html?administrador=${administrador}&id=${id}">
                <img src="./static/img/section-products/icon-editar.svg" class="icon-editar"/>
                </a>
                    
                </div>
                 <img src=${imagen}  class="imagen-producto" id= ${id} />
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
        //trae la url
        const url = new URL(window.location);

        //searchParams.get de la  url nos trae el elemento que especifivamos 
        // administrador  nos dice si es o no administrador, esto se encargar  la validacion  de  login
        const administrador = url.searchParams.get('administrador')


        const elemento = informacion_producto[i];
        const estructura_elemento = estructara_producto(elemento.nombre, elemento.precio, elemento.imagen, elemento.id,administrador)
        const contenedor_productos = document.querySelector("[contenedor-productos]")
        contenedor_productos.appendChild(estructura_elemento)
        
        

    }

    
}

