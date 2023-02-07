import { mostrarAlert } from "../utils/alerts.js";

function validateForm(){
    const buttonsend = document.querySelector('.input-button');

        // Formulario de contacto 

    const input_name = document.querySelector('.input-name');
    const input_mensaje = document.querySelector('#mensaje')

    buttonsend.addEventListener('click', () => {

        let informationAlert={
            icon: 'error',
            title: 'Oops...Error',
            text: '',
            footer:''
        }


        if (input_name.value === '' || input_mensaje.value === '') {

            informationAlert.text='Hay campos vacios'

        }

        else if (input_name.value.length > 40) {

            informationAlert.text='El campo nombre solo permite  máximo 40 caracteres'

        }

        else if (input_mensaje.value.length > 120) {

            informationAlert.text='El campo mensaje solo permite  máximo 120 caracteres'
        }

        else {
        
            input_name.value = '';
            input_mensaje.value = '';

            informationAlert.icon='success';
            informationAlert.text='Mensaje Enviado'

        }

        mostrarAlert(informationAlert);

    })

}

export {validateForm}







