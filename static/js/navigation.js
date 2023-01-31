import { data } from "../../Information/data.js";
import { informacion_basic_producto } from "./product-card-basic/index.js";
import { mostrarProducto } from "./InformationProducto/index.js";
import { register } from "./register/index.js";

// import { informacion_productos_administrador } from "./mostrar-datos-administrador/mostrar-datos.js"

//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);

console.log(url);

window.addEventListener('hashchange',() =>{
    location.reload()
    window.scrollTo(0, 0); /* lleva  al inicio de la página */
});

// al recargar pagina
window.onload = ()=> {
    navigation()
}

function navigation (){
    // home
    if (url.hash===''){
        console.log('inicio')
        informacion_basic_producto(data)
        sectionHero.style='block';
        
    }

    else if (url.hash==='#allProducts'){
        console.log('allProducts')
        informacion_basic_producto(data,'all-products')
    }

    else if (url.hash.includes('productoID')) {
        console.log('producto')
        buttonRegister.style.display = 'none'
        mostrarProducto(url,data)

    }

    else if  (url.hash==='#register') {
        console.log('register')
        register()
    }

}




// else if (url.pathname.includes('/inicio-administrador.html')) {
//     informacion_productos_administrador(informacion_start_wars)
//     informacion_productos_administrador(informacion_consolas)
//     informacion_productos_administrador(informacion_diversos)

