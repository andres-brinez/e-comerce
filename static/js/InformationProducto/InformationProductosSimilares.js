import {estructura_productos_similares } from "./estructuraProducto.js"




//  llena los datos  porque la estructura ya está hecha
function productos_similares(categoria,data) {

    const productosSimilares= data[categoria]

    // rrcorrer cada producto

    productosSimilares.forEach(producto => {
        estructura_productos_similares(producto)
    })




}

export {productos_similares}




