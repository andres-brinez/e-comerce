// guarda los datos en el localStorage
function saveData(data) {

    try{
         // local storage solo funciona en el navegador de  la persona
        // setItem - agregar  la informacion  al local storage
        // stringify pasa los datos del objeto javascript a string
        localStorage.setItem(data.email, JSON.stringify(data))
        return true

    }
    catch(err){
        console.log("Error al guardar datos",err)
        alert("Error",err)
        
    }
   

}

export  {saveData}
// function getData() {
//     return JSON.parse(localStorage.getItem('data'));
// }


