import { saveData } from "./SaveDate.js";
import { mostrarAlert } from "../utils/alerts.js";
import { validationFormInicial } from "../utils/valadationFormLoginRegister.js";

let informationAlert={
    icon: 'error',
    title: 'Oops...Error',
    text: '',
    footer:''
}


function validationForm(){

    const buttonRegister = document.getElementById('buttonRegister')
    const input_name = document.querySelector('#nameUser');
    const selectUser = document.querySelector('#selectRol')
    const input_email = document.querySelector('#email');
    const input_password = document.querySelector('#password');

    buttonRegister.addEventListener('click', () => {
        const camposFormularioCorrectos=validationFormInicial(informationAlert)

        if (camposFormularioCorrectos){

            const data  ={
                email: input_email.value,
                password: input_password.value,
                name: input_name.value,
                rol: selectUser.value,
            }
    
            const saveDatas=saveData(data) // devuelve si se guardaron los datos
            
            if(saveDatas===true){

                Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Usuario Creado',
                button: "Ok!",
                })
                .then(resultado => {
                    //cuando cierre el mensaje en ok
                    if (resultado.value) {
                        window.location.replace("#login");
    
                    }
                });
            }
            else {
                informationAlert.text= 'Intenda de  nuevo más tarde'
                mostrarAlert(informationAlert)

            }  
        }
    })
}

export  {validationForm}