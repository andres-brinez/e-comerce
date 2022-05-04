import { mostrar_datos } from "./mostrar-datos.js";

//enviar la peticion al servidor
const http = new XMLHttpRequest()
http.open('GET', "./json.json", true)
http.send();

//para ver  la respuesta del servidor  a la peticion cuando cargue 
http.onload = () => {
    //lo que recibimos del servidor es texto,por eso debemos pasarlo a algo que  js pueda manejas (array)
    //eso se hace con JSON.parse
    const data = JSON.parse(http.response) //trae la respuesta del  servidor


    const contenedor_start_wars = document.querySelector("[start-wars]")
    const informacion_start_wars = data.start_wars
    mostrar_datos(informacion_start_wars, contenedor_start_wars)

    const informacion_consolas = data.consolas
    const contenedor_consolas = document.querySelector("[consolas]")
    mostrar_datos(informacion_consolas, contenedor_consolas)

    const informacion_diversos = data.diversos
    const contenedor_diversos = document.querySelector("[diversos]")
    mostrar_datos(informacion_diversos, contenedor_diversos)

}




