import { data } from "../../Information/data.js";

import { informacion_basic_producto } from "./product-card-basic/index.js";
import { mostrarProducto } from "./InformationProducto/index.js";
import { hero } from "./components/hero.js";
import { setionContact } from "./components/contactSetion.js";

import { register } from "./register/index.js";
import { login } from "./login/index.js";

import { dashboard } from "./dashboard/index.js";
import { addProduct } from "./dashboard/agregar-productos/index.js";
import { editProduct } from "./dashboard/crudProducts/update/index.js";

import { getLocalStoreSesion } from "./utils/getSesionActive.js";

import { headerBasic,headerLogin,headerRegister,headerDashboard} from "./components/header.js";

import { alertNoLogeado } from "./utils/alerts.js";
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

const isLogeado= getLocalStoreSesion()

function navigation() {
    // home
    if (url.hash === '') {
        document.title ="Inicio";
        console.log('inicio')
        headerBasic()
        hero()
        informacion_basic_producto(data)
        setionContact()

    }

    else if (url.hash === '#allProducts') {
        console.log('allProducts')
        document.title ="Todos los productos";
        headerBasic()
        informacion_basic_producto(data, 'all-products')
    }

    else if (url.hash.includes('productoID')) {
        console.log('producto')
        document.title ="Producto";
        headerBasic()
        mostrarProducto(url, data)

    }

    else if (url.hash === '#register') {
        console.log('register')
        document.title ="Registrarce"
        headerRegister()
        register()
    }

    else if (url.hash === '#login') {
        console.log('login')
        document.title ="Iniciar sesión"
        headerLogin()
        login()

    }

    // se debe estár logeado para acceder  a la página
    

    else if (url.hash.includes('Dashboard')) {
        document.title='Dashboard'

        if(isLogeado==null){
            alertNoLogeado()
        }
        else{
            console.log('Dashboard')
            headerDashboard()
            
            if (url.hash.includes('True')) {
                console.log('administrador')
                dashboard('administrador')
    
            }
            else {
                console.log('usuario')
                dashboard('usuario')
                
            }
    
            // desde la validación del login se llama la funcion dashboard que ejecuta el codigo 
        }
        }

    else if (url.hash === '#addProduct') {
        document.title='Agregar producto'

        if(isLogeado==null){
            alertNoLogeado()
        }
        else{
            console.log('addproduct')
            addProduct()
            headerDashboard()
        }

    }

    else if (url.hash.includes('edit')) {
        document.title='Editar Producto'
        if(isLogeado==null){
            alertNoLogeado()
            
        }
        else{
        
            if (isLogeado.rol=='Administrador'){
                console.log('editProduct')
                headerDashboard()
                editProduct()

            }
            else{
                alert('no tienes acceso  ')
                window.location.href = ''
            }
        }
    }
    
    // pagina  no encontrada
    else {
        
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Página no encontrada',
            showConfirmButton: false,
            footer: '<a href="">Ir a  inicio</a>'

          })
    }
    

    


}
