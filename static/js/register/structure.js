function structure(){

    const containerRegister= document.createElement("div");
    containerRegister.classList.add("login");
    containerRegister.innerHTML=`

    <h2>Registrarce</h2>
            <form action="" class="formulario-login">
                <input id="nameUser" type="text" placeholder="Nombre">
                <select name="selectRol" id="selectRol" required>
                    <option value="">Elige tu  rol</option>
                    <option value="User">Usuario</option>
                    <option value="Administrador">Administrador</option>
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