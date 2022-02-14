// Retorna un array amb les posicions coincidents d'acord amb el valor (value)
// a cercar dins l'array indicat (vector)

function cercaCoincidents(value, vector) {
  let posicionsCoincidents = [];
  for (let i = 0; i < vector.length; i++) {
    if (value == vector[i]) {
      posicionsCoincidents.push(i);
    }
  }
  return posicionsCoincidents;
}

window.onload = function () {
  //EXERCICI 4.1 DESORDENATS

  //Recuperam actors

  let actors = getNomsActors();

  let cadena = "";

  cadena += "<p>";
  for (const llinatgesNom of actors) {
    cadena += llinatgesNom + "<br>";
  }
  cadena += "</p>";

  document.getElementById("desordenats").innerHTML = cadena;

  //EXERCICI 4.1 ORDENATS

  let actorsOrdenats = actors.sort();

  cadena = "";

  cadena += "<p>";
  for (const llinatgesNom of actorsOrdenats) {
    cadena += llinatgesNom + "<br>";
  }
  cadena += "</p>";

  document.getElementById("ordenats").innerHTML = cadena;

  //EXERCICI 4.2

  cadena = "";
  if (!location.search) {
    cadena +=
      '<form action="actors.html">' +
      '<p><label for="llinatge">Iintrodueix llinatge: </label>' +
      '<input type="text" id="llinatge" name="llinatge"/></p>' +
      '<p><button type="submit">CERCAR</button></p></form>';
  } else {
    let valorGet = location.search;
    //eliminam ?
    valorGet = valorGet.substring(1, valorGet.length);
    //Separam per =
    let parts = valorGet.split("=");
    //Assignam llinatge a variable
    let llinatge = parts[1];
    //console.log(llinatge);
    //Ho passam a MAJUSCULES
    llinatge = llinatge.toUpperCase();

    // Cream un array només amb els llinatges
    let nomesLlinatgesOrdenats = [];
    for (let i = 0; i < actorsOrdenats.length; i++) {
      let llinatges_nom = actorsOrdenats[i].split(",");
      nomesLlinatgesOrdenats.push(llinatges_nom[0]);
    }

    //Cercam coincidents
    let coincidents = cercaCoincidents(llinatge, nomesLlinatgesOrdenats);

    cadena = "";

    if (coincidents.length > 0) {
      cadena +=
        "<p>S'HAN TROBAT ELS SEGÜENTS ACTORS AMB EL LLINATGE " +
        "<strong>" +
        llinatge +
        ":</strong></p><p>";
      for (let i = 0; i < coincidents.length; i++) {
        cadena += "- " + actorsOrdenats[coincidents[i]] + "<br>";
      }
      cadena += "</p>";
    } else {
      cadena +=
        "<p>NO S'HA TROBAT CAP ACTOR AMB EL LLINATGE: <strong>" +
        llinatge +
        "</strong></p>";
    }
  }
  document.getElementById("cerca").innerHTML = cadena;
};
