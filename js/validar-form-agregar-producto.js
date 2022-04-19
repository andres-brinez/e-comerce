const button_agregar = document.querySelector('.button-agregar-producto');


button_agregar.addEventListener('click', (evento) => {
    evento.preventDefault();
    const input_name = document.querySelector('#input-name');
    const input_price = document.querySelector('#input-price');
    const descripcion_product = document.querySelector('.descripcion-producto');
    const estado_imagen = document.querySelector('#estado-imagen');
    console.log(estado_imagen.className);

    if (input_name.value === '' || input_price.value === '' || descripcion_product.value === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Campo vacio ',
        })
    }

    else if (estado_imagen.className == '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Debes subir  una imagen para el producto',
        })
    }

    else {

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado ',
        })


        input_name.value = '';
        input_price.value = '';
        descripcion_product.value = '';

        const contenedor = document.querySelector('#estado-imagen');
        contenedor.style.display = 'none';
        const opciones_agregar_archivo = document.querySelector('.opcion-agregar-producto')
        opciones_agregar_archivo.style.display = 'flex';

    }

})