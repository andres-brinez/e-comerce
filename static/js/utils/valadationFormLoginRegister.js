import { mostrarAlert } from "./alerts.js";

function validationFormInicial(informationAlert){

    // Valida los datos del formulario 

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const input_email = document.querySelector('input[type="email"]')
    const input_password = document.querySelector('input[type="password"]')

    // Valida los datos del formulario

    if (input_email.value === '' || input_password.value === '') {
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

export {validationFormInicial}