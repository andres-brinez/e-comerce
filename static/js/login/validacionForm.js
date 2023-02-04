import { mostrarAlert } from "../utils/alerts.js";
import { validationFormInicial } from "../utils/valadationFormLoginRegister.js";

let informationAlert={
    icon: 'error',
    title: 'Oops...Error',
    text: '',
    footer:''
}

function validacionWithLocalStorage(){

    const input_email = document.querySelector('#login-email')
    const input_password = document.querySelector('#login-password')

    //verificar los datos del formulario con los del localStorage 
        
    const dataLocalStorage = JSON.parse(localStorage.getItem(input_email.value))

    
    // if (input_email.value == 'brinezlopez2022@gmail.com' && input_password.value == 'prueba2022') {
    //     window.location.replace("./inicio-administrador.html?administrador=True");

    // }

    // si no se encuentra información del usuario
    if(dataLocalStorage==null){
        
        informationAlert.text='Usuario no registrado'
        informationAlert.footer='<a href="#register">Registrece</a>'
    }

    else if (dataLocalStorage.password!= input_password.value) {
        
        informationAlert.text='Contraseña incorrecta'
    }


    
    else {

        localStorage.setItem(input_email.value, JSON.stringify(dataLocalStorage))

        if (dataLocalStorage.rol==='User'){
            window.location.replace("#Dashboard?False");
            
        }

        else if (dataLocalStorage.rol==='Administrador'){
            window.location.replace("#Dashboard?True");
            
        }
        
        localStorage.setItem('sesionActive', JSON.stringify(dataLocalStorage.email))
    }
    

    if (informationAlert.text.length>5){
        mostrarAlert(informationAlert)

    }

    
}

function validacionForm(){

    const buttonSendLogin = document.querySelector('#login-buttom')
    
    buttonSendLogin.addEventListener('click', () => {

        const camposFormularioCorrectos=validationFormInicial(informationAlert)

        // si los campos del formulario estan correctos pasan la siguiente validación
        if (camposFormularioCorrectos) {

            validacionWithLocalStorage()

        }
    })
}

export {validacionForm}