// se encarga de  la estructura del producto 

function createContainerArticle(key){
    const containerMain = document.createElement('article');
    containerMain.classList.add("article-type-product")
    containerMain.setAttribute("category", key)
    containerMain.innerHTML=
    
    `

        <div class="descripcion">
          <h2 class="title-type-product">${key}</h2>
          <div class="see-all">
            <a href="./all-productos.html">ver todo</a><img src="./static/img/section-products/flecha.svg" alt="flecha" class="flecha" />
          </div>
        </div>
        <div class="contenedor-produtos " ${key}> 
        </div>
    
    `

    sectionProducts.appendChild(containerMain)

}

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


export function informacion_basic_producto( data) {
    
    // accede a cada llave del objeto 
    for (let key in data){

        // por cada tipo de objeto (producto) se crea  un articulo
        createContainerArticle(key)

        // accede a todos los productos del tipo de producto
        const productos = data[key];

        // recorrer cada producto
        for (let i = 0; i < productos.length; i++) {

            let producto = productos[i];
            // crea la estructra
            const estructura_elemento=estructura_producto(producto.imagen,producto.nombre,producto.precio,producto.id)
            
            let contenedor=''
            if (key=='Start wars'){
                contenedor=document.querySelector(`[wars]`)
                
            }

            else {
                contenedor=document.querySelector(`[${key}]`)
            }

            // agrega la  información del producto al contenedor correspondiente
            contenedor.appendChild(estructura_elemento)

        }

    }

    

}




