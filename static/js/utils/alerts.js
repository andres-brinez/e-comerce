// funcion para mostrar los alerts (swal)

function mostrarAlert(information) {
   new swal({
        title: information.title,
        text: information.text,
        icon: information.icon,
        footer: information.footer
    })
}

export {mostrarAlert}
