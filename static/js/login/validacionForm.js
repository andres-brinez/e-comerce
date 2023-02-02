

function validacionForm(){
    const buttonSendLogin = document.querySelector('#login-buttom')
    
    buttonSendLogin.addEventListener('click', (evento) => {

        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const input_email = document.querySelector('#login-email')
        const input_password = document.querySelector('#login-password')

    
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
                text: 'formato del correo incorrecto '
                ,
    
            })
    
        }
    
        else if (input_password.value.length < 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...Error',
                text: 'contraseña corta '
                ,
    
            })
        }
    
        else {
            const dataLocalStorage = JSON.parse(localStorage.getItem(input_email.value))

            console.log(dataLocalStorage==input_password.value)
    
            // if (input_email.value == 'brinezlopez2022@gmail.com' && input_password.value == 'prueba2022') {
            //     window.location.replace("./inicio-administrador.html?administrador=True");
    
            // }
            if(dataLocalStorage==null){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Error',
                    text: 'Usuario no registrado ',
                    footer: '<a href="#register">Registrece</a>'
                   ,
    
                })
            }

            else if (dataLocalStorage.password!= input_password.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Error',
                    text: 'Contraseña incorrecta '
                  ,
    
                })
            }
    
            else {

                if (dataLocalStorage.rol=='user'){
                    window.location.replace("#Dashboard?False");
                    
                }

                else if (dataLocalStorage.rol=='administrador'){
                    window.location.replace("#Dashboard?True");
                    
                }

                alert('usuario correcto ')
                
    
                //     if (input_email.value == nombre_usuario && input_password.value == contraseña) {
                //         window.location.replace("./inicio-administrador.html?administrador=False");
                //         break
                //     }
    
                //     
                //    
            }
    
        }
    
}

)}

export {validacionForm}