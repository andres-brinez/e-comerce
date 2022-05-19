const button_login = document.querySelector('#login-buttom');
const input_email = document.querySelector('#login-email');
const input_password = document.querySelector('#login-password');

button_login.addEventListener('click', (evento) => {
    evento.preventDefault();
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const nombre_usuario = document.querySelector('#login-email')
    const contraseña_usuario = document.querySelector('#login-password')

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

    else if (contraseña_usuario.value.length<5){
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'contraseña invalida '
            ,

        })
    }

    else { 
        console.log(nombre_usuario.value)
        console.log(contraseña_usuario.value)
        if (nombre_usuario.value=='brinezlopez08@gmail.com'  && contraseña_usuario.value=='comedor20'  ) {
            window.location.replace("./inicio-administrador.html?administrador=True");
            
        }

        else {
            window.location.replace("./inicio-administrador.html?administrador=False");
        }

        }

        
    
})


