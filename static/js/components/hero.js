function hero(){

    const container = `
    <section class="section-hero" >
      <div class="hero-img desktop">
        <picture>
          <source media="(min-width:1000px)" srcset="./static/img/section-hero/Hero-desktop.svg">
          <source media="(min-width:300px)" srcset="./static/img/section-hero/Hero-tablet.svg">
          <source media="(min-width:200px)" srcset="./static/img/section-hero/Hero-phone.svg">
          <img src="" alt="imagen hero" />
        </picture>
      </div>
      <div class="hero-informacion">
        <h2 class="titulo-hero">Febrero Promocional</h2>
        <p class="parrafo_hero">
          Productos selecionados con 33% de descuento
        </p>
        <a href="#consolas" class="button-hero"> Ver Consolas</a>
      </div>
    </section>
    `

    // insertAdjacentHTML .  inserta al árbol DOM los nodos resultaron de dicho análisis en la posición establecida
    // 'afterbegin': Justo dentro del elemento, antes de su primer elemento hijo.
    main.insertAdjacentHTML('afterbegin',container)

}

export {hero}