function elimina(e) {
  // Recuperam l'element pare (<li></li>) de l'element <a></a> (link)
  var objecte = e.target;
  var liObjecte = objecte.parentNode;
  // Recuperam l'element pare (<ul></ul>) de l'element <li></li>
  var ulObjecte = liObjecte.parentNode;
  // Eliminam element <li></li>
  ulObjecte.removeChild(liObjecte);
}

function canviaLlista(e) {
  // Recuperam l'element pare (<li></li>) de l'element <a></a> (link)
  var objecte = e.target;
  var liObjecte = objecte.parentNode;
  // Recuperam l'element pare (<ul></ul>) de l'element <li></li>
  var ulObjecte = liObjecte.parentNode;
  // Passam el desig a llistaDesitjosComplits
  var novaUl;
  if (ulObjecte === document.getElementById("llistaDesitjosDemanats")) {
    novaUl = document.getElementById("llistaDesitjosComplits");
  } else {
    novaUl = document.getElementById("llistaDesitjosDemanats");
  }
  novaUl.appendChild(liObjecte);
}

function afegir() {
  // Recuperam desig
  var nou_desig = document.getElementById("nou_desig").value;
  // Cream element <li></li>
  var nouLi = document.createElement("li");

  // Cream un node de text i li assignam el valor nouDesig
  var text = document.createTextNode(nou_desig + " ");
  // Inserim el node de text en element <li></li>
  nouLi.appendChild(text);

  // Cream element <a></a> per esborrar
  var esborra = document.createElement("a");
  // Cream node de text "ESBORRA"
  text = document.createTextNode("ESBORRA");
  // Inserim el node de text en element <a></a>
  esborra.appendChild(text);
  // Establim atribut per <a></a>
  esborra.setAttribute("href", "#");
  // AFEGIM LISTENER
  esborra.addEventListener("click", elimina);
  // Inserim element <a></a> en element <li></li>
  nouLi.appendChild(esborra);

  // Cream expai en blanc
  text = document.createTextNode(" ");
  nouLi.appendChild(text);

  // Cream element <a></a> per canviar de llista
  var canvia = document.createElement("a");
  text = document.createTextNode("CANVIA DE LLISTA");
  canvia.appendChild(text);
  canvia.setAttribute("href", "#");
  canvia.addEventListener("click", canviaLlista);
  nouLi.appendChild(canvia);

  // Recuperam element <ul></ul>
  var llistaDesitjos = document.getElementById("llistaDesitjosDemanats");
  // Inserim l'element <li></li> en element <ul></ul>
  llistaDesitjos.appendChild(nouLi);
}

window.onload = function () {
  document.getElementById("boto").onclick = afegir;
};
