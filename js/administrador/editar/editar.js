//trae  los datos del api y  los  pone en el formulario
import {mostrar_imagen } from "./mostrar-imagen.js";


//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);
//searchParams.get de la  url nos trae el elemento que especifivamos 
const id = url.searchParams.get('id');
const administrador = url.searchParams.get('administrador')
console.log(administrador)

if (administrador === 'True') {
    if (id.indexOf(2.) == 0) {
        detalle_producto(id, 'consolas').then((producto) =>
            cambiar_valores(producto,0))
    
    }
    else if (id.indexOf(1.) == 0) {
        detalle_producto(id, 'start_wars').then((producto) =>
            cambiar_valores(producto,1))
    }
    
    else if (id.indexOf(3.) == 0) {
        detalle_producto(id, 'diversos').then((producto) => 
        cambiar_valores(producto,2))
    }
    
    function detalle_producto (id,categoria){
        return fetch(`https://productos-ecomerce.herokuapp.com/${categoria}/${id}`).then(response => response.json()
        )
    }
    
    
    const input_name = document.getElementById('input-name')
    const input_price = document.getElementById('input-price')
    const input_description = document.querySelector('.descripcion-producto')
    const input_categoria = document.getElementById('categoria')
}

else if (administrador === 'False') {
    swal.fire({
        icon: 'error',
        title: 'Oops...',
        title: 'opción invalida',
        text: "Solo el administrador puede Editar este  video  este  producto",
        confirmButtonColor: '#008f39',
        confirmButtonText: 'OK',
        
    }).then((result) => {
        if (result.isConfirmed) {
            window.close()
        }

        })
}




function cambiar_valores(producto,numero_categoria) {
    const imagen= producto.imagen

    input_name.value = producto.nombre
    input_price.value = producto.precio
    // los select se cambian sengun la posicion en la que estan
    input_description.value=producto.descripcion
    input_categoria.selectedIndex = numero_categoria
    mostrar_imagen(imagen)


}
