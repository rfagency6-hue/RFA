const intro = document.getElementById("intro");
const btn = document.getElementById("enterBtn");
const contenido = document.getElementById("contenido");

btn.addEventListener("click", () => {
    intro.style.display = "none";
    contenido.style.display = "block";
});
