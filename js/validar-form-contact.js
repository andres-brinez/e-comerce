const button = document.querySelector('.input-button');
const input_name = document.querySelector('.input-name');
const input_mensaje = document.querySelector('#mensaje')
button.addEventListener('click', () => {


    if (input_name.value === '' || input_mensaje.value === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Campo vacio ',
        })
    }

    else if (input_name.value.length > 40) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'El campo nombre solo permite  máximo 40 caracteres '
            ,

        })

    }



    else if (input_mensaje.value.length > 120) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: ' El campo mensaje solo permite  máximo 120 caracteres'
            ,

        })

    }

    else {
        input_name.value = '';
        input_mensaje.value = '';
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado ',
        })
    }

})


