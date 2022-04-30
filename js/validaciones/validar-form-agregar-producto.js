
const button_agregar = document.querySelector('.button-agregar-producto');

button_agregar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const input_name = document.querySelector('#input-name');
    const input_price = document.querySelector('#input-price');
    const descripcion_product = document.querySelector('.descripcion-producto');
    const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')
    const contenedor = document.querySelector('.contenedor-imagen');


    if (input_name.value === '' || input_price.value === '' || descripcion_product.value === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Campo vacio ',
        })
    }

    else if (input_name.value.length > 20) {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Nombre del producto debe tener un máximo de 20 caracteres.',
        })


    }

    else if (descripcion_product.value.length > 120) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'la descripcion del producto debe tener un máximo de 120 caracteres.',
        })


    }

    else if (contenedor.childNodes.length!=2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Debes subir  una imagen para el producto',
        })
    }

    else {
        const imagen = document.querySelector('.box-img');
      

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado ',
        })


        //pone  en blanco el input
        input_name.value = '';
        input_price.value = '';
        descripcion_product.value = '';

        //eliminar  imagen
        contenedor.childNodes[0].remove()
        //eliminar  la el texto
        contenedor.childNodes[0].remove()


        //muestra la opcion de agregar imagen
        opciones_agregar_archivo.classList.add('mostrar')
        opciones_agregar_archivo.classList.remove('oculto')

    }

})