const container = ()=>{

    const sectionProducto = document.createElement('section');
    sectionProducto.classList.add('producto');

    const sectionProductosSimilares= document.createElement('section');
    sectionProductosSimilares.classList.add('article-type-product');

    
    sectionProducto.innerHTML=`

        <img src="" alt=""class="producto-imagen" />
        <div class="producto-informacion">
          <h2 class="nombre-producto"></h2>
          <p class="producto-precio"></p>
          <p class="producto-descripcion">
            Voluptas voluptatum quibusdam similique, class debitis alias
            maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis,
            minima malesuada habitasse distinctio sequi aliqua malesuada.
            Quisque deleniti proin expedita, aliquid litora. Iste recusandae?
            Commodo, quia ridiculus doloribus vero dictum? Penatibus donec
            placeat faucibus, dolorum do. Animi porta anim magnam
          </p>
        </div>
      
      
    `

    sectionProductosSimilares.innerHTML=`
    
        <div class="descripcion">
          <h2 class="title-type-product">Productos similares</h2>
        </div>

        <div class="contenedor-produtos">
        
        </div>
    `

    main.innerHTML=''
    main.appendChild(sectionProducto)
    main.appendChild(sectionProductosSimilares)

    
}

    
const estructura_productos_similares = (nombre, precio, imagen,id) => {
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

export function estructura_producto(producto){
    
    container()

    const imagen_producto = document.querySelector('.producto-imagen')
    const precio_producto = document.querySelector('.producto-precio')
    const nombre_producto = document.querySelector('.nombre-producto')

    // Agregar la informacion
    titulo.textContent = producto.nombre
    nombre_producto.textContent = producto.nombre
    imagen_producto.src = producto.imagen
    imagen_producto.alt = producto.nombre
    precio_producto.textContent = producto.precio
    
}
