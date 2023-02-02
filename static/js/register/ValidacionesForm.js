import { saveData } from "./SaveDate.js";


function validationForm(){

    
    const buttonRegister = document.getElementById('buttonRegister')
    const input_email = document.querySelector('#email');
    const input_password = document.querySelector('#password');

    buttonRegister.addEventListener('click', () => {

        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    
        if (input_email.value === '' || input_password.value === '') {
    
            Swal.fire({
                icon: 'error',
                title: 'Oops...Error',
                text: 'Campo vacio ',
            })
        }
    
        //devuelver false si no cumple  con el regex
        else if (!emailRegex.test(input_email.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Error',
                text: 'Formato del correo incorrecto '
                ,
    
            })
        }
    
        else if (input_password.value.length < 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Error',
                text: 'Contraseña Corta '
                ,
    
            })
        }
    
        else {
            
            const data  ={
                email: input_email.value,
                password: input_password.value
            }
    
            const saveDatas=saveData(data)
            // saveData(data)
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
                Swal.fire({
                icon: 'error',
                title: 'Oops...Error',
                text: 'Intenda de  nuevo más tarde ' ,
                button: "Ok!",
                })
            }  

        }
    })
}

export  {validationForm}