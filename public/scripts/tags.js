window.onload = () => {
    const link = document.getElementById("gameIframe")
    link.setAttribute("src", "./game/index.html?id=" + sessionStorage.id);
}