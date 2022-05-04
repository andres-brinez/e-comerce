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


    const contenedor_productos = document.querySelector("[contenedor-productos]")
   
    const informacion_start_wars = data.start_wars
    mostrar_datos(informacion_start_wars, contenedor_productos)

    const informacion_consolas = data.consolas
    mostrar_datos(informacion_consolas, contenedor_productos)

    const informacion_diversos = data.diversos
    mostrar_datos(informacion_diversos, contenedor_productos)


    console.log(1)

}




