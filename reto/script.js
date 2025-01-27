// Reproducir música de fondo
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 1; // Ajustar volumen
backgroundMusic.play();

// Contador de caracteres
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  charCount.textContent = textInput.value.length;
});

const bici = document.getElementById("bici");

bici.addEventListener("click", () => {
  bici.classList.add("spin");

// Remover la clase después de la animación para que pueda girar nuevamente
  setTimeout(() => {
    bici.classList.remove("spin");
  }, 1000); // Tiempo
});