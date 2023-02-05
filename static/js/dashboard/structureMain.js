function strutureMain(data){
    
  const containerMain=document.createElement("section")
  containerMain.classList.add("section-products")

  containerMain.innerHTML=`
    <h1>Bienvenido ${data.name } - ${data.rol}  </h1>
    <article class="article-type-product" >
    <div class="descripcion titulo">
      <h2 class="title-type-product">Todos los productos </h2>
      
        <a target="_blank" class="btn-agregar-producto" href="#addProduct">Agregar Producto</a>
    </div>
  
    <div class="contenedor-produtos " contenedor-productos> 
    </div>
  </article>
    
  `


  main.innerHTML=''
  main.appendChild(containerMain)
}

export {strutureMain}