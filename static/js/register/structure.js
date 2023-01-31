function structure(){

    const containerRegister= document.createElement("div");
    containerRegister.classList.add("login");
    containerRegister.innerHTML=`

    <h2>Registrarce</h2>
            <form action="" class="formulario-login">
                <input id="email" type="email" placeholder="Escriba su correo electrónico">
                <input id="password" type="password" placeholder="Escriba su contraseña">
                <button id="buttom" type="button" >Enviar </button>
            </form>
    
    `

    main.innerHTML=''

    main.appendChild(containerRegister)


}

export {structure}