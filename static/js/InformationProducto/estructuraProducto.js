// container del producto y  productos similaes
const createContainers = ()=>{

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

export const estructura_productos_similares = (categoria,producto) => {
    const contenedor_producto = document.createElement("div")
    console.log(producto)
    contenedor_producto.classList.add("contenedor-producto")
    const contenido = `
            <img src=${producto.imagen} />
            <p class="name-product">${producto.nombre}</p>
            <p class="price-product">${producto.precio}</p>
            <a href="#Category=${categoria}/productoID=${producto.id}" class="see-product">Ver producto</a>
    `
    contenedor_producto.innerHTML = contenido;

    const contenedor_productos= document.querySelector('.contenedor-produtos')
    contenedor_productos.appendChild(contenedor_producto)
}

export function estructura_producto(producto){
    
    createContainers()

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
