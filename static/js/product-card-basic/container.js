// se encarga de  la estructura del contendor de los productos 

function createContainerArticle(key){
    const containerMain = document.createElement('article');
    containerMain.classList.add("article-type-product")
    containerMain.setAttribute("category", key)
    containerMain.innerHTML=
    
    `

        <div class="descripcion">
          <h2 class="title-type-product">${key}</h2>
          <div class="see-all">
            <a href="index.html#allProducts">ver todo</a><img src="./static/img/section-products/flecha.svg" alt="flecha" class="flecha" />
          </div>
        </div>
        <div class="contenedor-produtos " ${key}> 
        </div>
    
    `

    sectionProducts.appendChild(containerMain)

}

function createContainerAllProducts(titulo){

    const container = document.createElement('section');
    container.classList.add("section-products")

    container.innerHTML=`
        <article class="article-type-product" >
            <div class="descripcion titulo">
            <h2 class="title-type-product">${titulo}</h2>
            </div>
            <div class="contenedor-produtos" id='all-products' contenedor-productos> 
            </div>
        </article>
    `

    // borra todo lo  que haya en el main 
    main.innerHTML=''

    main.appendChild(container)
 

}


export {createContainerAllProducts,createContainerArticle}