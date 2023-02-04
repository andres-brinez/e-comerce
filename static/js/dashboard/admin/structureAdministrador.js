import { data } from "../../../../Information/data.js"

function structureAdministrador(){

    showProducts();


    
}


function StructureProduct(product,category){
    const contenedor = document.createElement("div")   
    contenedor.classList.add("contenedor-producto")

    const contenido = `
            <div class="contenedor-image">
                <div class="contenedor-eliminar"> 
                    <a href="#delete?id=${product.id}&category=${category}"><img src="./static//img/section-products/icon-eliminar.svg" class="icon-eliminar"/></a>
                </div>
                <div class="contenedor-editar">             
                <a target='_blank' href="#edit?id=${product.id}&category=${product.category}">
                <img src="./static/img/section-products/icon-editar.svg" class="icon-editar"/>
                </a>
                    
                </div>
                 <img src=${product.imagen}  class="imagen-producto" id= ${product.id} />
            </div>
    
            <p class="name-product">${product.nombre}</p>
            <p class="price-product">${product.precio}</p>
            <a href="./producto.html?id=${product.id}" class="see-product" target="_blank">Ver producto</a>
            `
    contenedor.innerHTML = contenido
 
    return contenedor
}

function showProducts(){
    const contenedor_productos = document.querySelector("[contenedor-productos]")
    
     // accede a cada llave del objeto (cada categoria)
     for (let category in data){


        // accede a todos los productos de la categoria
        const productos = data[category];

        // recorre cada producto de la categoria
        for (let i = 0; i < productos.length; i++) {

            let producto = productos[i];

            
            const structure_product= StructureProduct(producto,category) 

            // agrega la  información del producto al contenedor correspondiente
            contenedor_productos.appendChild(structure_product)

        }
    }
}

export {structureAdministrador}