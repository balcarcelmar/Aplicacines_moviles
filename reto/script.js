// Reproducir música de fondo
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.volume = 1; // Ajustar volumen
backgroundMusic.stop();

// Contador de caracteres
const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", () => {
  charCount.textContent = textInput.value.length;
});

const bici = document.getElementById("bici");

// Detectar clic en la bicicleta
bici.addEventListener("click", (event) => {
  // Obtener las coordenadas relativas del clic en el elemento
  const rect = bici.getBoundingClientRect();
  const offsetX = event.clientX - rect.left; // Clic relativo al borde izquierdo
  const offsetY = event.clientY - rect.top;  // Clic relativo al borde superior

  // Ajustar dinámicamente el transform-origin al punto del clic
  bici.style.transformOrigin = `${offsetX}px ${offsetY}px`;

  // Añadir la clase para aplicar la animación
  bici.classList.add("spin");

  // Remover la clase después de la animación para poder hacer clic de nuevo
  setTimeout(() => {
    bici.classList.remove("spin");
  }, 1000); // Duración de la animación (1s)
});


// Animacion del sol y el nevado
const paisaje = document.getElementById("paisaje");
const sol = document.getElementById("sol");
const nevado = document.getElementById("nevado");
const nevado2 = document.getElementById("nevado2");
const nube = document.getElementById("nube")
const lluvia1 = document.getElementById("lluvia1");
const lluvia2 = document.getElementById("lluvia2");
const lluvia3 = document.getElementById("lluvia3");

// Detectar clic en el sol
paisaje.addEventListener("click", () => {
  // Añadir las clases para activar las animaciones
  sol.classList.add("move-down");
  nevado.classList.add("move-left");
  nevado2.classList.add("move-right");
  nube.classList.add("move-away"); // Mover la nube
  lluvia1.classList.add("move-down");
  lluvia1.classList.add("shake");
  lluvia2.classList.add("move-down");
  lluvia3.classList.add("move-down");
  paisaje.style.backgroundColor = "#315e99"
});