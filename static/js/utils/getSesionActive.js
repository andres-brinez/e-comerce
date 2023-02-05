function getLocalStoreSesion(){
    // obtener valor de localstore del usuario que esta logeado
  const sesionActive = JSON.parse(localStorage.getItem('sesionActive'))
  const dataLocalStorage = JSON.parse(localStorage.getItem(sesionActive))
  
  return dataLocalStorage
}

export {getLocalStoreSesion}
