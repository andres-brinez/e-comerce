import { structureForm } from "./structure.js"
import { inputFileValidate } from "../../validaciones/validar-button-img.js"
import { buttonSendValidate } from "../../validaciones/validarForm.js"
import { validarArrastrarImagen } from "../../validaciones/validar-arrastrar-imagen.js"

function editProduct (){

    structureForm() // crea el formulario

    // VALIDACIONES de las  imagenes y el formulario
    validarArrastrarImagen()
    inputFileValidate()
    buttonSendValidate('Producto Editado')

}

export {editProduct}

