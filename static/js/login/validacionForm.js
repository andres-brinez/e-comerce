import { mostrarAlert } from "../utils/alerts.js";

let informationAlert={
    icon: 'error',
    title: 'Oops...Error',
    text: '',
    footer:''
}


function validationFormLogin(){
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const input_email = document.querySelector('#login-email')
    const input_password = document.querySelector('#login-password')

    // Valida los datos del formulario

    if (input_email.value === '' || input_password.value === '') {
        console.log('Please enter')
        informationAlert.text = 'campos vacios'    
    }

    //devuelver false si no cumple  con el regex
    else if (!emailRegex.test(input_email.value)) {
        
        informationAlert.text='Formato del correo incorrecto'

    }

    else if (input_password.value.length < 5) {
        
        informationAlert.text = 'contraseña corta'
    }
    
    else {
        return true
    }

    mostrarAlert(informationAlert)


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

        if (dataLocalStorage.rol=='user'){
            window.location.replace("#Dashboard?False");
            
        }

        else if (dataLocalStorage.rol=='administrador'){
            window.location.replace("#Dashboard?True");
            
        }
        
        localStorage.setItem('sesionActive', JSON.stringify(dataLocalStorage.email))
    }
        mostrarAlert(informationAlert)

    
}

function validacionForm(){
    const buttonSendLogin = document.querySelector('#login-buttom')
    
    buttonSendLogin.addEventListener('click', () => {

        const camposFormularioCorrectos=validationFormLogin()

        // si los campos del formulario estan correctos pasan la siguiente validación
        if (camposFormularioCorrectos) {

            validacionWithLocalStorage()
            
        }

    })

    
}

export {validacionForm}