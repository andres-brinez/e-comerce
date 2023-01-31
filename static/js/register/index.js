import { structure } from "./structure.js"
import { validationForm } from "./ValidacionesForm.js"


function register(){

    // Crea la estructura del formulario de registro
    structure()
    
    // Crea los eventos del formulario de registro
    validationForm()

}

export  {register}