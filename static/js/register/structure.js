function structure(){

    const containerRegister= document.createElement("div");
    containerRegister.classList.add("login");
    containerRegister.innerHTML=`

    <h2>Registrarce</h2>
            <form action="" class="formulario-login">
                <input id="text" type="email" placeholder="Nombre">
                <select name="selectRol" id="">
                    <option value="user">Usuario</option>
                    <option value="administrador">Administrador</option>
                </select>
                <input id="email" type="email" placeholder="Correo electrónico">
                <input id="password" type="password" placeholder="Contraseña">

                <button id="buttonRegister" type="button" >Enviar </button>
            </form>
    
    `

    main.innerHTML=''

    main.appendChild(containerRegister)


}

export {structure}