const campo_filtrar = document.querySelector("[input-buscar]")

campo_filtrar.addEventListener("input", () => {
    //obtiene  todos  los  nombres de los  productos  y los guarda en un array
    let nombres = document.getElementsByClassName('name-product')

    if (campo_filtrar.value.length > 0) {
        // recorrer el array de  nombres  y da cada nombre del producto
        for (let i = 0; i < nombres.length; i++) {
            // i, no diferencia mayusculas ni minusculas
            let regex = new RegExp(campo_filtrar.value, "i")
            let contenedor_producto = nombres[i].parentElement
            let contenedor_productos = contenedor_producto.parentElement

            let nombre = nombres[i].innerText


            // .test, verifica si el valor  está en la expresion sin importar el order
            if (!regex.test(nombre)) {
                contenedor_producto.classList.add('invisible')

            }

            else {
                contenedor_producto.classList.remove('invisible')

            }
            // si todo esta oculto, es decir  que  no hay coincidencia se muestra  un mensaje y recarga la página
            if (document.getElementsByClassName('invisible').length == 18) {

    
                Swal
                    .fire({
                        title: "Lo sentimos",
                        text: `No hay resultados para la busqueda ${campo_filtrar.value} `,
                        icon: "info",
                        button: "Ok!",
                    })
                    .then(resultado => {
                        //cuando cierre el mensaje en ok
                        if (resultado.value) {
                            location.reload();
                            
                        } 
                    });
            }
        }
    }

    else {

        for (let i = 0; i < nombres.length; i++) {
            let contenedor = nombres[i].parentElement
            contenedor.classList.remove('invisible')

        }
    }

});




