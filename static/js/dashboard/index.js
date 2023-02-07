import { showProducts } from "./showProducts.js"
import { strutureMain } from "./structureMain.js"
import { getLocalStoreSesion } from "../utils/getSesionActive.js"
import { deleteProduct } from "./crudProducts/delete/index.js"
function dashboard() {

  const sesionActive = getLocalStoreSesion() // trae la  información de la sesion que está activa

  strutureMain(sesionActive)// crea la estructura principal
  showProducts()// muestra los productos en la estructura principal

  salir() // evento para cerrar sesion 
  deleteProduct()

}

// Función para serrar sesión y darle accion al boton salir
function salir() {
  const buttonSalir = document.querySelector('.buttonSalir')
  buttonSalir.addEventListener('click', (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar sesión!'
    }).then((result) => {
      if (result.isConfirmed) {
        // borra la sesión activa
        localStorage.setItem('sesionActive', JSON.stringify(''))
        window.location.href = '#login'

      }

    })

  })
}

export { dashboard }