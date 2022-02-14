//Recuperam rutes a imatges

let rutesImatges = getDestacades();

//console.log(rutesImatges);

window.onload = function () {
  //EXERCICI 2.1
  document.getElementById("mostrador").src = rutesImatges[0];

  //EXERCICI 2.2

  var idTimer;
  var numImatges = rutesImatges.length;
  var contador = 0;

  function carrusselImatges() {
    contador++;
    document.getElementById("mostrador").src = rutesImatges[contador];
    if (contador == numImatges - 1) {
      contador = -1;
    }
  }
  var idTimer = setInterval(carrusselImatges, 2000);

  var pausa = false;

  document.getElementById("boto").onclick = function () {
    if (!pausa) {
      clearInterval(idTimer);
      pausa = true;
      //console.log("pausat");
    } else {
      idTimer = setInterval(carrusselImatges, 2000);
      pausa = false;
      //console.log("reanudat");
    }
  };
};
