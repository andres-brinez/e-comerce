import { data } from "../../../../information/data.js ";

function findProduct(){

    if (campo_filtrar.value.length > 0) {

        let coincidencias = [];

        for (let category in data){

            // obtiene a todos los productos de la categoria
            const productos = data[category];
   
            // acceder a cada  producto de la categoria
            for (let i = 0; i < productos.length; i++) {

                const producto= productos[i]; /* obtiene el producto de data */
                let nameProductData = producto.nombre

                // i, no diferencia mayusculas ni minusculas
                // se crea una expresion regex
                let regex = new RegExp(campo_filtrar.value, "i")

                
                // .test, verifica si el valor  está en la expresion sin importar el orden
                if (regex.test(nameProductData)) {
                    //  si coincide con el nombre se agrega al array
                    coincidencias.push(producto)
                }
                
            }
        }
        return coincidencias
    }
}

export {findProduct}