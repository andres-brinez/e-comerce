import { addProductStructure } from "./structure.js"
import { inputFileValidate } from "../validaciones/validar-button-img.js"
import { buttonSendValidate } from "../validaciones/validarForm.js"
import { validarArrastrarImagen } from "../validaciones/validar-arrastrar-imagen.js"

function addProduct(){
    addProductStructure() //crea el formulario

    // VALIDACIONES de las  imagenes y el formulario
    validarArrastrarImagen()
    inputFileValidate()
    buttonSendValidate('producto Agregado ')

}

export {addProduct}