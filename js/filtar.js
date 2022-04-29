const campo_filtrar = document.querySelector("[input-buscar]")
const lupa = document.querySelector(".burcador-lupa")
console.log(lupa)


campo_filtrar.addEventListener("input", () => {

    let productos = document.querySelectorAll(".article-type-product")

    if (campo_filtrar.value.length > 0) {
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            let nombre_producto = producto.querySelector(".title-type-product").textContent

            if (nombre_producto != campo_filtrar.value) {
                producto.classList.add("invisible")
            }

            else {
                producto.classList.remove("invisible")
            }
        }

    }

    else{
        for (let i = 0; i < productos.length; i++) {
            let producto = productos[i];
            producto.classList.remove("invisible")
            }
      }



})