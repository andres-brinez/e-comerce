import { mostrarAlert } from "../../utils/alerts.js";

function buttonSendValidate(mensajeExito) {

    // Valida el formulario antes de envíarlo

    const button_agregar = document.querySelector('.button-agregar-producto');
    button_agregar.addEventListener('click', (evento) => {

        evento.preventDefault();

        const input_name = document.querySelector('#input-name');
        const input_price = document.querySelector('#input-price');
        const descripcion_product = document.querySelector('.descripcion-producto');
        const contenedor = document.querySelector('.contenedor-imagen');

        let informationAlert = {
            icon: 'error',
            title: 'Oops...Error',
            text: '',
            footer: ''
        }


        if (input_name.value === '' || input_price.value === '' || descripcion_product.value === '') {

            informationAlert.text = 'Hay campos vacios'

        }

        else if (input_name.value.length > 20) {

            informationAlert.text = 'Nombre del producto debe tener un máximo de 20 caracteres.'

        }

        else if (descripcion_product.value.length > 330) {

            informationAlert.text = 'La descripcion del producto debe tener un máximo de 200 caracteres.'


        }

        else if (contenedor.childNodes.length != 2) {

            informationAlert.text = 'Debe agregar una imagen para el producto'

        }

        else {
            Swal.fire({
                icon: 'success',
                title: mensajeExito,
            }).then(resultado => {
                window.location.replace("#Dashboard?True");
            });
        }

        if (informationAlert.text != 0) {
            mostrarAlert(informationAlert)
        }
    })
}

export { buttonSendValidate }