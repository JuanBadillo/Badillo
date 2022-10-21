function toggleSidebar(){
    var x = document.getElementById("sidebar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    const elem = document.getElementById("body");
    elem.style.background = "white";
}

function cambiaFondo(newColor) {
    var time = new Date();
    var timestamp = "[" + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + "]";
    
    const elem = document.getElementById("body");

    elem.style.background = newColor;
    elem.style.background = '-moz-linear-gradient(top, '+newColor+' 0%, #FFFFFF 50%, #FFFFFF 100%)';
    elem.style.background = '-webkit-linear-gradient(top, '+newColor+' 0%, #FFFFFF 50%, #FFFFFF 100%)';
    elem.style.background = 'linear-gradient(to bottom, '+newColor+' 0%, #FFFFFF 50%, #FFFFFF 100%)';

    console.log(timestamp + "Cambio de Fondo a "+newColor);
  }