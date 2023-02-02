function structureLogin(){

    const container= document.createElement('div');
    container.classList.add('login');

    container.innerHTML=`
    <h2>Iniciar Sesión</h2>
    <form action="" class="formulario-login">
        <input id="login-email" type="email" placeholder="Escriba su correo electrónico">
        <input id="login-password" type="password" placeholder="Escriba su contraseña">
        <button id="login-buttom" type="button" >Entrar </button>
    </form>
    `

    main.innerHTML=''
    main.appendChild(container);

}

export {structureLogin}