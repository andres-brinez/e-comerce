import { data } from "../../Information/data.js";

import { informacion_basic_producto } from "./product-card-basic/index.js";
import { mostrarProducto } from "./InformationProducto/index.js";

import { register } from "./register/index.js";
import { login } from "./login/index.js";

import { dashboard } from "./dashboard/index.js";
import { addProduct } from "./dashboard/agregar-productos/index.js";
import { editProduct } from "./dashboard/crudProducts/update/index.js";

//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);

console.log(url);

window.addEventListener('hashchange', () => {
    location.reload()
    window.scrollTo(0, 0); /* lleva  al inicio de la página */
});

// al recargar pagina
window.onload = () => {
    navigation()
}

function navigation() {
    // home
    if (url.hash === '') {
        console.log('inicio')
        informacion_basic_producto(data)
        sectionHero.style = 'block';

    }

    else if (url.hash === '#allProducts') {
        console.log('allProducts')
        informacion_basic_producto(data, 'all-products')
    }

    else if (url.hash.includes('productoID')) {
        console.log('producto')
        buttonRegister.style.display = 'none'
        mostrarProducto(url, data)

    }

    else if (url.hash === '#register') {
        console.log('register')
        buttonRegister.style.display = 'none'
        contenedorBuscar.style.display = 'none'
        register()
    }

    else if (url.hash === '#login') {
        console.log('login')
        contenedorBuscar.style.display = 'none'
        buttonLogin.style.display = 'none'
        buttonRegister.style.display = 'inline-block'
        login()

    }

    else if (url.hash.includes('Dashboard')) {
        console.log('Dashboard')
        contenedorBuscar.style.display = 'none'


        buttonLogin.textContent = 'salir'
        buttonLogin.className = 'buttonSalir'
        buttonRegister.style.display = 'none'


        sectionContact.style.display = 'none'

        if (url.hash.includes('True')) {
            console.log('administrador')
            dashboard('administrador')

        }
        else {
            console.log('usuario')
            dashboard('usuario')
            const buttonAddProduct = document.querySelector('.btn-agregar-producto')
            buttonAddProduct.style.display = 'none'
        }

        // desde la validación del login se llama la funcion dashboard que ejecuta el codigo 
    }

    else if (url.hash === '#addProduct') {
        console.log('addproduct')

        contenedorBuscar.style.display = 'none'

        buttonRegister.style.display = 'none'

        buttonLogin.textContent = 'salir'
        buttonLogin.className = 'buttonSalir'

        sectionContact.style.display = 'none'

        addProduct()

        

    }

    else if (url.hash.includes('edit')) {
        console.log('editProduct')

        contenedorBuscar.style.display = 'none'

        buttonRegister.style.display = 'none'

        buttonLogin.textContent = 'salir'
        buttonLogin.className = 'buttonSalir'

        sectionContact.style.display = 'none'
        editProduct()

        
    }

    // if (sesionActive==null){
    //   window.location.href = './login.html'
    // }


}
