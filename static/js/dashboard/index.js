import { showProducts } from "./showProducts.js"
import { strutureMain } from "./structureMain.js"
import { getLocalStoreSesion } from "../utils/getSesionActive.js"
function dashboard() {

  const sesionActive = getLocalStoreSesion() // trae la  información de la sesion que está activa

  strutureMain(sesionActive)// crea la estructura principal
  showProducts()// muestra los productos en la estructura principal
  // addProduct()
  salir() // evento para cerrar sesion 

}

// Función para serrar sesión y darle accion al boton salir
function salir() {
  const buttonSalir = document.querySelector('.buttonSalir')
  buttonSalir.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '#login'
    // borra la sesión activa
    localStorage.setItem('sesionActive', JSON.stringify(''))

  })
}

export { dashboard }