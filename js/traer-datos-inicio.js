// trae  los  datos del servidor 

import { data } from "../Information/data.js";

import { informacion_producto } from "./datos-index.html/mostrar-datos.js";
import { informacion_productos } from "./mostrar all productos/mostrar-datos.js";
import { informacion_productos_administrador } from "./administrador/mostrar-datos-administrador/mostrar-datos.js"


const informacion_consolas = data.consolas
const informacion_start_wars = data.start_wars
const informacion_diversos = data.diversos

//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);


const contenedor_start_wars = document.querySelector("[start-wars]")
const contenedor_consolas = document.querySelector("[consolas]")
const contenedor_diversos = document.querySelector("[diversos]")

if (url.pathname.includes('/all-productos.html')) {

    informacion_productos(informacion_diversos)

}


if (url.pathname.includes('index') || url.pathname == '/e-comerce/') {
    informacion_producto(informacion_start_wars, contenedor_start_wars, 'start wars')
    informacion_producto(informacion_consolas, contenedor_consolas, 'consolas')
    informacion_producto(informacion_diversos, contenedor_diversos)

}

else if (url.pathname.includes('/inicio-administrador.html')) {
    informacion_productos_administrador(informacion_start_wars)
    informacion_productos_administrador(informacion_consolas)
    informacion_productos_administrador(informacion_diversos)


}


















