function deleteProduct (){

    const iconEliminar= document.querySelectorAll('.icon-eliminar')

    iconEliminar.forEach(icon => {

        icon.addEventListener('click', (e) => {
            
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                if (result.isConfirmed) {
                    e.target.parentElement.parentElement.parentElement.remove() // remueve el contenedor, para esto se debe ir al pariente del elemento
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )                    
                }
            })
        })
    })
}

export {deleteProduct}