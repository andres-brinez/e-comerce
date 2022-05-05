import { mostrar_datos } from "./mostrar-datos.js";

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



//para ver  la respuesta del servidor  a la peticion cuando cargue 
informacion_start_wars.onload = () => {

    //lo que recibimos del servidor es texto,por eso debemos pasarlo a algo que  js pueda manejas (array)
    //eso se hace con JSON.parse
    const datos_start_wars = JSON.parse(informacion_start_wars.response) //trae la respuesta del  servidor
    const contenedor_start_wars = document.querySelector("[start-wars]")
    mostrar_datos(datos_start_wars, contenedor_start_wars)


}

informacion_consolas.onload = () => {

    const datos_consolas = JSON.parse(informacion_consolas.response) 
    const contenedor_consolas = document.querySelector("[consolas]")
    mostrar_datos(datos_consolas, contenedor_consolas)


}


informacion_diversos.onload = () => {

    const datos_diversos = JSON.parse(informacion_diversos.response) 
    const contenedor_diversos = document.querySelector("[diversos]")
    mostrar_datos(datos_diversos, contenedor_diversos)

}







