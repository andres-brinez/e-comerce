const button_login = document.querySelector('#login-buttom');

// este  es  un mensaje informativo que se  mostrará al iniciar sesion 
alert("si quieres ingresar modo Administrador, ingrese el correo brinezlopez2022@gmail.com y la  contraseña prueba2022 \n sino registrece para obtener  un usuario y  contraseña")


button_login.addEventListener('click', (evento) => {
    evento.preventDefault();
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const input_email = document.querySelector('#login-email')
    const input_password = document.querySelector('#login-password')

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
            text: 'contraseña corta '
            ,

        })
    }

    else {

        if (input_email.value == 'brinezlopez2022@gmail.com' && input_password.value == 'prueba2022') {
            window.location.replace("./inicio-administrador.html?administrador=True");

        }

        else {
            console.log(input_password.value)
            console.log(input_email.value)
            // trae todos  los usarios qyue estan en el local estorage, funcion del validar registrarce
            const usuarios = JSON.parse(localStorage.getItem("contraseña") || [])
            
            for (let i = 0; i < usuarios.length; i++) {
                const nombre_usuario = usuarios[i].correo_usuario
                const contraseña = usuarios[i].contraseña_usuario

                if (input_email.value == nombre_usuario && input_password.value == contraseña) {
                    window.location.replace("./inicio-administrador.html?administrador=False");
                    break
                }

                else if (input_email.value != nombre_usuario || input_password.value != contraseña) {
                    // window.location.replace("./inicio-administrador.html?administrador=False");    
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...Error',
                        text: 'Datos incorrectos ',
                        

                    })
                }

                else if (input_email.value != nombre_usuario && input_password.value != contraseña) {
                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...Error',
                        text: 'Usuario no registrado ',
                        footer: '<a href="./registrarce.html">Registrece</a>'
                        ,



                    })
                }
            }
        }

    }








})


