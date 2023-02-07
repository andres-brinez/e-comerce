import { getLocalStoreSesion} from '../utils/getSesionActive.js'

function structureProduct(product,category){
    const contenedor = document.createElement("div")   
    contenedor.classList.add("contenedor-producto")

    const sesionActive = getLocalStoreSesion() // trae la  información de la sesion que está activa

    let contenido=''

    // dependiendo el rol se  muestra  la  información
    
    if(sesionActive.rol === "User"){
        // no se da la opción para eliminar y editar
    
        contenido=`
    <div class="contenedor-image">
        <img src=${product.imagen}  class="imagen-producto" id= ${product.id} />
    </div>

    <p class="name-product">${product.nombre}</p>
    <p class="price-product">${product.precio}</p>
    <a href="/#Category=${category}/productoID=${product.id}" class="see-product" target="_blank">Ver producto</a>
    `
    }
    else {
        // se da la  opción de editar y  eliminar  
        contenido = `
        <div class="contenedor-image">
            <div class="contenedor-eliminar"> 
                <img src="./static//img/section-products/icon-eliminar.svg" class="icon-eliminar"  />
            </div>
            <div class="contenedor-editar">             
            <a target='_blank' href="#edit?id=${product.id}&category=${category}">
            <img src="./static/img/section-products/icon-editar.svg" class="icon-editar"/>
            </a>
                
            </div>
            <img src=${product.imagen}  class="imagen-producto" id= ${product.id} />
        </div>

        <p class="name-product">${product.nombre}</p>
        <p class="price-product">${product.precio}</p>
        <a href="/#Category=${category}/productoID=${product.id}" class="see-product" target="_blank">Ver producto</a>
        `

    }

    contenedor.innerHTML = contenido
 
    return contenedor
}

export {structureProduct}