import { data } from "../../Information/data.js";
import { informacion_basic_producto } from "./mostrar-datos-inicio.js";

import { informacion_productos } from "./mostrar all productos/mostrar-datos.js";
import { informacion_productos_administrador } from "./mostrar-datos-administrador/mostrar-datos.js"



//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);

// home
if (url.hash===''){
    console.log('inicio')
    informacion_basic_producto(data)
    
}

// else if (url.pathname.includes('/inicio-administrador.html')) {
//     informacion_productos_administrador(informacion_start_wars)
//     informacion_productos_administrador(informacion_consolas)
//     informacion_productos_administrador(informacion_diversos)


// if (url.pathname.includes('/all-productos.html')) {

//     informacion_productos(data.consolas)

// }