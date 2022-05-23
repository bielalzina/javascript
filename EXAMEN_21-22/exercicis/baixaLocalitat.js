window.onload = function () {
  function emplenaCela(valor, boto) {
    const cela = document.createElement("td");
    cela.appendChild(document.createTextNode(valor));
    if (boto) {
      const boto = document.createElement("button");
      boto.appendChild(document.createTextNode("ELIMINAR"));
      boto.setAttribute("type", "button");

      cela.appendChild(boto);
    }
    return cela;
  }

  function carregaLocalitats() {
    const url = "http://52.178.39.51:8082/localitats";
    const req = new XMLHttpRequest();
    const taula = document.getElementById("taula");
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          //console.log(req.responseText);
          const resultat = JSON.parse(req.responseText);
          console.log(resultat);

          resultat.forEach((element) => {
            const fila = document.createElement("tr");

            fila.appendChild(emplenaCela(element.idIlla, false));
            fila.appendChild(emplenaCela(element.idLocalitat, false));
            fila.appendChild(emplenaCela(element.nomLocalitat, true));
            taula.appendChild(fila);
          });
        } else {
          const missatge = JSON.parse(req.responseText);
          select.append(document.createTextNode(missatge.error));
        }
      }
    });
    req.open("GET", url);
    req.send();
  }
  carregaLocalitats();
};
