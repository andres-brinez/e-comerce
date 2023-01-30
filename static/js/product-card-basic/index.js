import { createContainerAllProducts, createContainerArticle } from "./container.js";
import { estructura_producto } from "./estructura_producto.js";

// Llama a las demás funciones
export function informacion_basic_producto(data,allProducts=null ) {

    // crea el contendor  solo una vez  si es para todos lox productos
    if(allProducts!=null) {
        createContainerAllProducts('Todos los productos');
    }
    
    // accede a cada llave del objeto (cada categoria)
    for (let key in data){

        if (allProducts===null){
            // por cada tipo de objeto (categoria) se crea  un article
            createContainerArticle(key);
        }

        // accede a todos los productos de la categoria
        const productos = data[key];

        // recorre cada producto de la categoria
        for (let i = 0; i < productos.length; i++) {

            let producto = productos[i];

            // crea la estructra del producto en hrml 
            const estructura_elemento=estructura_producto(key,producto.imagen,producto.nombre,producto.precio,producto.id)
            
            // elegir el contenedor correspondiente

            let contenedor=''

            // si no es  la sesión de  todos los  productos , sino que es la de  inicio 
            if  (allProducts==null) {

                if (key=='Start wars'){
                    contenedor=document.querySelector(`[wars]`)
                    
                }
    
                else {
                    contenedor=document.querySelector(`[${key}]`)
                }

            }

            // si es la sesión de  todos los productos
            else{
                contenedor=document.getElementById('all-products')

            }

            // agrega la  información del producto al contenedor correspondiente
            contenedor.appendChild(estructura_elemento)

        }

    }


}







