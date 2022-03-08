function afegir() {
  // Recuperam desig
  var nou_desig = document.getElementById("nou_desig").value;
  // Cream element <li></li>
  var nouLi = document.createElement("li");
  // Cream un node de text i li assignam valor nou_desig
  var text = document.createTextNode(nou_desig);
  // Inserim el node de text en element <li></li>
  nouLi.appendChild(text);
  // Recuperam element <ul></ul>
  var llista_desitjos = document.getElementById("llista_desitjos");
  // Inserim l'element <li></li> en element <ul></ul>
  llista_desitjos.appendChild(nouLi);
}

window.onload = function () {
  document.getElementById("boto").onclick = afegir;
};
