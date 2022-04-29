console.log(1)

//enviar la peticion al servidor
const http=new XMLHttpRequest()
http.open('GET', 'https://andres-brinez.github.io/json-ecomerce/informacion.json')
http.send();


//para ver  la respuesta del servidor  a la peticion cuando cargue 
http.onload= ()=>{
    const data =http.response  //trae la respuesta del  servidor
    console.log(data)
   
}
