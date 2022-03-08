function afegir() {
  // Recuperam desig
  var nouDesig = document.getElementById("nou_desig").value;
  // Cream element <li></li>
  var nouLi = document.createElement("li");

  // Cream un node de text i li assignam el valor nouDesig
  var text = document.createTextNode(nouDesig + " ");
  // Inserim el node de text en element <li></li>
  nouLi.appendChild(text);

  // Cream element <a></a> per esborrar
  var link = document.createElement("a");
  // Cream node de text "ESBORRA"
  text = document.createTextNode("ESBORRA");
  // Inserim el node de text en element <a></a>
  link.appendChild(text);
  // Establim atributs per <a></a>
  link.setAttribute("href", "#");
  link.setAttribute("onclick", "elimina(this)");

  // Inserim element <a></a> en element <li></li>
  nouLi.appendChild(link);

  // Recuperam element <ul></ul>
  var llistaDesitjos = document.getElementById("llista_desitjos");
  // Inserim l'element <li></li> en element <ul></ul>
  llistaDesitjos.appendChild(nouLi);
}

function elimina(objecte) {
  // Recuperam l'element pare de l'element <a></a> (link)
  var liObjecte = objecte.parentNode;
  // Recuperam l'element pare de l'element <li></li>
  var ulObjecte = liObjecte.parentNode;
  // Eliminam element <li></li>
  ulObjecte.removeChild(liObjecte);
}

window.onload = function () {
  document.getElementById("boto").onclick = afegir;
};
