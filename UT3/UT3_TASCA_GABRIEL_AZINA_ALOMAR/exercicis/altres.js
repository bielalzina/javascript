//FUNCIÓ: retorna el valor màxim d'un array

function obtenirMaxim(vector) {
  let max = vector[0];
  for (let i = 1; i < vector.length; i++) {
    if (vector[i] > max) {
      max = vector[i];
    }
  }
  return max;
}

function printArray(vector) {
  let cadena = "[";
  for (let value of vector) {
    cadena += value + ", ";
  }
  return cadena.substring(0, cadena.length - 2) + "]";
}

window.onload = function () {
  //EXERCICI 3.1

  let quadrats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arrels = quadrats.map(Math.sqrt);
  cadena = "";
  cadena += "<p><strong>QUADRATS -> ARRELS</strong><br></p><p>";

  for (let i = 0; i < quadrats.length; i++) {
    let arrelSortida = arrels[i];
    if (arrels[i] % Math.floor(arrels[i]) > 0) {
      arrelSortida = arrels[i].toFixed(4) + "...";
    }
    cadena += quadrats[i] + " -> " + arrelSortida + "<br>";
  }

  cadena += "</p>";
  document.getElementById("arrels").innerHTML = cadena;

  //EXERCICI 3.2

  cadena = "";
  cadena +=
    "<p>L'enunciat diu: Crea una funció que torni el màxim dels valors que rep " +
    "per paràmetre. El nombre de valors que rep no està determinat, " +
    "pot ser qualsevol i diferent en cada crida.</p>";
  cadena +=
    "<p>Entenc que cal fixar un numero màxim de valors. En aquest cas el numero " +
    "de valors pot variar entre 1 i 100 elements</p>";
  cadena +=
    "<p>També cal fixar el valor màxim que es pot assiganar a cada element. " +
    " En aquest cas el valor pot variar entre 0 i 10000.</p>";

  let numElements = Math.round(Math.random() * 100);

  cadena += "<p><strong>NUMERO D'ELEMENTS: </strong>" + numElements + "</p>";

  let valors = [];

  for (let i = 0; i < numElements; i++) {
    valors.push(Math.round(Math.random() * 10000));
  }

  cadena += "<p><strong>VALORS: </strong>" + printArray(valors) + "</p>";

  let maxim = obtenirMaxim(valors);

  cadena += "<p><strong>VALOR MÀXIM: </strong>" + maxim + "</p>";

  document.getElementById("maxim").innerHTML = cadena;
};
