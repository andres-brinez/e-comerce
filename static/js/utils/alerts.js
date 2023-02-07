// funcion para mostrar los alerts (swal)

function mostrarAlert(information) {
   new swal({
        title: information.title,
        text: information.text,
        icon: information.icon,
        footer: information.footer
    })
}

function alertNoLogeado(){
    Swal.fire(
        '¿Estás  logeado?',
        'Inicia sesión para ingresar a esta función ',
        'question'
      )
      .then(() => {
        window.location.href = '#login'
    })
}



export {mostrarAlert,alertNoLogeado}
