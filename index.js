window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg",
  ];
  const intervalTime = 10000; // 10 segundos en milisegundos

  let currentIndex = 0;
  const mainElement = document.getElementById("principal");

  // Pre-cargar imágenes en un arreglo
  const imagePreload = [];
  backgrounds.forEach(function (background) {
    const img = new Image();
    img.src = `images/${background}`;
    imagePreload.push(img);
  });

  function changeBackground() {
    mainElement.style.backgroundImage = `url("images/${backgrounds[currentIndex]}")`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
  }

  // Cambia el fondo cada 15 segundos
  setInterval(changeBackground, intervalTime);

  // Cambia el fondo al cargar la página
  changeBackground();
});
