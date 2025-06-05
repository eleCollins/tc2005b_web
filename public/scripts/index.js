const boton = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = async () => {
    // validar credenciales
    const user = {username: username.value, password: password.value};
    const data = await fetch("http://localhost:6001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });
    const res = await data.json();
    if(res.isLogin){
        sessionStorage.setItem("name", res.name);  // Guardar nombre en sessionStorage
        sessionStorage.setItem("id", res.user_id);  // Guardar id en sessionStorag
        window.location = "./pages/profile.html";  // Redirigir a perfil
    } else {
        alert("Credenciales incorrectas, por favor intente nuevamente.");
    }
};

boton.addEventListener("click", login);
