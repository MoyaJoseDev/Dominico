window.addEventListener("load", function () {
  var loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = [
    "assets/images/background1.jpg",
    "assets/images/background2.jpg",
    "assets/images/background3.jpg",
    "assets/images/background4.jpg",
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
