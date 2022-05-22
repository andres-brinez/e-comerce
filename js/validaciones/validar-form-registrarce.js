
const button_login = document.querySelector('#buttom');
const input_email = document.querySelector('#email');
const input_password = document.querySelector('#password');
//para guardar todos los datos que ingrese siempre
// get  item trae los datos que hay en el almacenamiento local y si no tiene nada devuelve  un array vacion []
// json.parse pasa a  un objeto que podamos manipula
const usuarios = JSON.parse(localStorage.getItem("contraseña" )|| [])
console.log(usuarios[0])

button_login.addEventListener('click', (evento) => {
    evento.preventDefault();
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (input_email.value === '' || input_password.value === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Campo vacio ',
        })
    }

    //devuelver false si no cumple  con el regex
    else if (!emailRegex.test(input_email.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'formato del correo incorrecto '
            ,

        })
    }

    else if (input_password.value.length < 5) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Error',
            text: 'Contraseña Corta '
            ,

        })
    }

    else {
        Swal.fire({
            icon: 'success',
            title: 'Correcto',
            text: 'Usuario Creado',
            button: "Ok!",
        })
            .then(resultado => {
                //cuando cierre el mensaje en ok
                if (resultado.value) {
                    // window.location.replace("./login.html");

                }
            });
    }

    const correo_usuario = input_email.value
    const contraseña_usuario = input_password.value;



    //guarda los datos que  el  usuario ingrese  en el momento
    const datos = {
        // llave  y valor
        correo_usuario,
        contraseña_usuario
    }

    usuarios.push(datos)
    console.log(usuarios)

    // local storage solo funciona en el navegador de  la persona
    // setItem - agregar  la informacion  al local storage
    // stringify pasa los datos del objeto javascript a string
    localStorage.setItem("contraseña", JSON.stringify(usuarios))

})