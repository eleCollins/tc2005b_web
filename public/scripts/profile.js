// Obtenemos el botón de logout
const logoutButton = document.getElementById("logout");

// Añadimos el evento de click al botón de logout
logoutButton.addEventListener("click", () => {
    // Limpiamos los datos guardados en sessionStorage
    sessionStorage.clear();
    
    // Redirigimos al usuario a la página de login
    window.location = "../index.html";
});
