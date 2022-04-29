const button_login = document.querySelector('#login-buttom');
const input_email = document.querySelector('#login-email');
const input_password = document.querySelector('#login-password');

button_login.addEventListener('click', (evento) => {
    evento.preventDefault();
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    console.log(emailRegex.test(input_email.value))
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

    else{
        window.location.replace("./agregar-producto.html");   
    }

})


