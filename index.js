window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    "images/background1.jpg",
    "images/background2.jpg",
    "images/background3.jpg",
    "images/background4.jpg",
  ];

  let main = document.getElementById('principal')
  let count = 0;
  function contar(){
    count++;
    if (count == 4){count = 0;}
    return count;
  }
  setInterval(() => {
    main.style.backgroundImage = `url(${backgrounds[contar()]})`;
    console.log(count);
    
  }, 10000);
});
