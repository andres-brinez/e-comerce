import { createContainerAllProducts } from "../product-card-basic/container.js";
import { estructura_producto } from "../product-card-basic/estructura_producto.js";

function AddProductStructure(productos){
    // crear el contenedor para mostrar todas las coincidencias y se le pasa el titulo del conteneor
    createContainerAllProducts('Coincidencias');

    let key= ''

    // recorre cada  producto  
    for (let i = 0; i < productos.length; i++) {

        // para saber a que categoria (key) pertenene el producto, esto se sabe con el numero que empieza el id
        // la categoria es  importante para  ponerla en la url 
        if (parseInt(productos[i].id)==1){
            key='Start wars'
        }
        else if (parseInt(productos[i].id)==2){
            key='Consolas'
        }
        else{
            key='Diversos'
        }

        let producto = productos[i];

        // crea la estructra del producto en html 
        const estructura_elemento=estructura_producto(key,producto.imagen,producto.nombre,producto.precio,producto.id)
        
        // elegir el contenedor correspondiente
        const contenedor=document.getElementById('all-products')

        // agrega la  información del producto al contenedor 
        contenedor.appendChild(estructura_elemento)

    }
}

export {AddProductStructure}