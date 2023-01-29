import { informationProducto } from "./InformationProduct.js"
import { estructura_producto } from "./estructuraProducto.js"
import { productos_similares } from "./InformationProductosSimilares.js"

// informacion_producto,contenedor_producto

function mostrarProducto(url,data){

    // obtener la  informacion del producto desde la url 
    const Category= url.hash.split('/').slice('=')[0].split('=')[1]
    const idUrlProduct= url.hash.split('/').slice('=')[1].split('=')[1]

    // quita los espacion 
    const newCategory = Category.replace('%20',' ')

    // obtener informacion del producto 
    const producto = informationProducto(idUrlProduct,newCategory,data)

    //Estructura de producto (html) 
    estructura_producto(producto)
    productos_similares(newCategory,data)

}
  

export {mostrarProducto}
