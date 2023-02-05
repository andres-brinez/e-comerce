import { data } from "../../../../Information/data.js"
import { structureProduct } from "./structureProduct.js";

function showProducts(){
    const contenedor_productos = document.querySelector("[contenedor-productos]")
    
     // accede a cada llave del objeto (cada categoria)
     for (let category in data){


        // accede a todos los productos de la categoria
        const productos = data[category];

        // recorre cada producto de la categoria
        for (let i = 0; i < productos.length; i++) {

            let producto = productos[i];

            const structure_product= structureProduct(producto,category) 

            // agrega la  información del producto al contenedor correspondiente
            contenedor_productos.appendChild(structure_product)

        }
    }
}

export {showProducts}