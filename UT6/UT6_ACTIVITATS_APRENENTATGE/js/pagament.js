function rbCanvia(pId) {
  function crearInput(pLabel, pName) {
    var paragraf = document.createElement("p");
    var lab = document.createElement("label");
    var textLab = document.createTextNode(pLabel);
    lab.setAttribute("for", pName);
    lab.appendChild(textLab);

    paragraf.appendChild(lab);

    var inp = document.createElement("input");
    inp.setAttribute("type", "text");
    inp.setAttribute("name", pName);
    inp.setAttribute("id", pName);

    paragraf.appendChild(inp);

    capa.appendChild(paragraf);
  }

  var capa = document.getElementById("dPagament");

  // ELIMINAM ELEMENTS DE CAPA
  while (capa.lastChild) {
    capa.removeChild(capa.lastChild);
  }

  if (pId == "rbTar") {
    crearInput("NUMERO TARGETA: ", "numTargeta");
    crearInput("CADUCITAT TARGETA: ", "cadTargeta");
    crearInput("CODI VERIFICACIÓ TARGETA: ", "cvsTargeta");
  } else {
    var paragraf = document.createElement("p");
    var textParagraf = document.createTextNode(
      "HEU DE FER UNA TRANSFERÈNCIA AL COMPTE CORRENT "
    );
    paragraf.appendChild(textParagraf);
    var strong = document.createElement("strong");
    var textStrong = document.createTextNode("2100-0065-12-1002547894");
    strong.appendChild(textStrong);
    paragraf.appendChild(strong);
    var tPunt = document.createTextNode(".");
    paragraf.appendChild(tPunt);
    capa.appendChild(paragraf);

    paragraf = document.createElement("p");
    textParagraf = document.createTextNode(
      "UN COP CONFIRMADA LA RECEPCIÓ DE LA TRANSFERÈNCIA, US HO NOTIFICAREM AL CORREU ELECTRÒNIC INDICAT"
    );
    paragraf.appendChild(textParagraf);
    capa.appendChild(paragraf);
  }
}

window.onload = function () {
  document.getElementById("rbTrans").onchange = function () {
    rbCanvia("rbTrans");
  };
  document.getElementById("rbTar").onchange = function () {
    rbCanvia("rbTar");
  };
};
