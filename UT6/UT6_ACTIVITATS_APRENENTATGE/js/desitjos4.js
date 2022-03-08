function afegir() {
  var nouDesig = document.getElementById("nou_desig").value;
  var nouLi = document.createElement("li");
  var text = document.createTextNode(nouDesig + " ");
  nouLi.appendChild(text);

  // LINK ESBORRAR
  var esborra = document.createElement("a");
  var imatgeEsborra = document.createElement("img");
  imatgeEsborra.setAttribute("src", "imatges/delete.gif");
  imatgeEsborra.setAttribute("title", "ESBORRA");

  esborra.appendChild(imatgeEsborra);
  esborra.setAttribute("href", "#");
  esborra.setAttribute("onclick", "eliminaDesig(this)");
  nouLi.appendChild(esborra);

  text = document.createTextNode(" ");
  nouLi.appendChild(text);

  //LINK CANVIAR DE LLISTAR
  var canvia = document.createElement("a");
  var imatgeCanvia = document.createElement("img");
  imatgeCanvia.setAttribute("src", "imatges/next-icon.png");
  imatgeCanvia.setAttribute("title", "CANVIA");

  canvia.appendChild(imatgeCanvia);
  canvia.setAttribute("href", "#");
  canvia.setAttribute("onclick", "canviaLlista(this)");

  nouLi.appendChild(canvia);

  var llista = document.getElementById("llistaDesitjosDemanats");
  llista.appendChild(nouLi);
}

function eliminaDesig(objecte) {
  var liObjecte = objecte.parentNode;
  var ulObjecte = liObjecte.parentNode;
  ulObjecte.removeChild(liObjecte);
}

function canviaLlista(objecte) {
  var liObjecte = objecte.parentNode;
  var ulObjecte = liObjecte.parentNode;
  var novaUl;
  var imatge = objecte.firstChild;
  if (ulObjecte === document.getElementById("llistaDesitjosDemanats")) {
    novaUl = document.getElementById("llistaDesitjosComplits");
    imatge.setAttribute("src", "imatges/back-icon.png");
  } else {
    novaUl = document.getElementById("llistaDesitjosDemanats");
    imatge.setAttribute("src", "imatges/next-icon.png");
  }
  novaUl.appendChild(liObjecte);
}

window.onload = function () {
  document.getElementById("boto").onclick = afegir;
};
