// codigo para  eliminar  un producto del administrador

//new URL es una funcion ya echa que nos trae la url
const url = new URL(window.location);

//searchParams.get de la  url nos trae el elemento que especifivamos 
const id = url.searchParams.get('id')
const nombre = url.searchParams.get('nombre');
const imagen = url.searchParams.get('imagen')
const administrador = url.searchParams.get('administrador')
console.log(id, nombre,administrador)
// si es administrador puede eliminar
if (administrador== 'True'){
    if (id == null || id == '') {
        'pass' // pass significa que  no haga nada 
    
    }
    
    else if (id > 1) {
        console.log(id)
        swal.fire({
            title: `Está seguro de querer eliminar el producto ${nombre} ?`,
            text: "Una vez eliminado no se podra recuperar!",
            imageUrl: imagen,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: `imagen del producto ${nombre}`,
            showCancelButton: true,
            confirmButtonColor: '#008f39',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Eliminado!',
                        `El producto ${nombre} fue eliminado`,
                        'success'
                    )
                }
    
                else {
                    Swal.fire(
                        'Cancelado',
                        `El producto ${nombre} no  fue eliminado`,
                        'error'
                    )
                }
            })
    }
}

// si no es administrador  no puede eliminar
else {
    if (id == null || id == '') {
        'pass' // pass significa que  no haga nada 
    
    }

    else if (id>1){
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            title: 'opción invalida',
            text: "Solo el administrador puede eliminar este  producto",
            confirmButtonColor: '#008f39',
            confirmButtonText: 'OK',
            
        })

    }
    

}

