const boton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    // Validación de credenciales (usuario y contraseña fijos para ejemplo)
    const correctUsername = "usuario";
    const correctPassword = "contraseña";

    if (username.value === correctUsername && password.value === correctPassword) {
        sessionStorage.setItem("name", "Lucio Collins");  // Guardar nombre en sessionStorage
        window.location = "./pages/profile.html";  // Redirigir a perfil
    } else {
        alert("Credenciales incorrectas, por favor intente nuevamente.");
    }
};

boton.addEventListener("click", login);
