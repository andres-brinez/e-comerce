// trae  los  datos del servidor 

import { informacion_producto } from "./datos-index.html/mostrar-datos.js";
import { informacion_productos } from "./mostrar all productos/mostrar-datos.js";
import { informacion_productos_administrador } from "./administrador/mostrar-datos-administrador/mostrar-datos.js"

// XMLHttpRequest() es para solicitudes HTTP
const informacion_consolas = new XMLHttpRequest()
const informacion_start_wars = new XMLHttpRequest()
const informacion_diversos = new XMLHttpRequest()

//enviar la peticion al servidor de que nos envie los datos 
informacion_consolas.open('GET', "https://productos-ecomerce.herokuapp.com/consolas",)
informacion_consolas.send();

informacion_start_wars.open('GET', "https://productos-ecomerce.herokuapp.com/start_wars",)
informacion_start_wars.send();

informacion_diversos.open('GET', "https://productos-ecomerce.herokuapp.com/diversos",)
informacion_diversos.send();

//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);



//para ver  la respuesta del servidor  a la peticion cuando cargue 
informacion_start_wars.onload = () => {

    //lo que recibimos del servidor es texto,por eso debemos pasarlo a algo que  js pueda manejas (array)
    //eso se hace con JSON.parse
    const datos_start_wars = JSON.parse(informacion_start_wars.response) //trae la respuesta del  servidor
    const contenedor_start_wars = document.querySelector("[start-wars]")

    if (url.pathname.includes('index') || url.pathname == '/e-comerce/') {
        informacion_producto(datos_start_wars, contenedor_start_wars, 'start wars')

    }

    else if (url.pathname.includes('/all-productos.html')) {
        informacion_productos(datos_start_wars)

    }

    else if (url.pathname.includes('/inicio-administrador.html')) {
        informacion_productos_administrador(datos_start_wars)
    }

}

informacion_consolas.onload = () => {

    const datos_consolas = JSON.parse(informacion_consolas.response)
    const contenedor_consolas = document.querySelector("[consolas]")
    if (url.pathname.includes('index')|| url.pathname == '/e-comerce/') {
        informacion_producto(datos_consolas, contenedor_consolas, 'consolas')
    }

    else if (url.pathname.includes('/all-productos.html')) {
        informacion_productos(datos_consolas)
    }

    else if (url.pathname.includes('/inicio-administrador.html')) {
        informacion_productos_administrador(datos_consolas)
    }

}


informacion_diversos.onload = () => {

    const datos_diversos = JSON.parse(informacion_diversos.response)
    const contenedor_diversos = document.querySelector("[diversos]")

    if (url.pathname.includes('index')|| url.pathname == '/e-comerce/') {
        informacion_producto(datos_diversos, contenedor_diversos)

    }

    else if (url.pathname.includes('/all-productos.html')) {

        informacion_productos(datos_diversos)

    }

    else if (url.pathname.includes('/inicio-administrador.html')) {
        informacion_productos_administrador(datos_diversos)
    }

}













