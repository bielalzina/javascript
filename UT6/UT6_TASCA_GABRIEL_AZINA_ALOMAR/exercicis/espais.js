window.onload = function () {
  //RECUPERAM TIPUS ESPAIS
  var espais = JSON.parse(getTipus());

  var idEspai;
  var tipusEspai;

  for (var index in espais) {
    // RECUPERAM INFO
    idEspai = espais[index]["id"];
    tipusEspai = espais[index]["cat"].toUpperCase();
    // ENVIAM VALOR id I cat A LA FUNCIÓ AFEGIRDIV1.1 PER CREAR UN DIV
    // PER A CADA TIPUS D'ESPAI
    afegirDiv1_1(idEspai, tipusEspai);
  }

  // RECUPERAM ESPAI SELECCIONST

  const espaiSeleccionat = document.getElementsByClassName("itemTipus");

  // AFEGIM LISTENER

  for (var i = 0; i < espaiSeleccionat.length; i++) {
    espaiSeleccionat[i].addEventListener("mousedown", modificaMostrador);
  }
};

function afegirDiv1_1(idEspai, tipusEspai) {
  // RECUPERAM NODE DIV PARE
  var pare = document.getElementById("mostrador");
  // CREAM ELEMENT <div></div>
  var nouDiv = document.createElement("div");
  // DECLARAM ATRIBUTS EN <div></div>
  nouDiv.setAttribute("class", "itemTipus");
  nouDiv.setAttribute("id", idEspai);
  // CREAM ELEMENT TEXT AMB TIPUS ESPAI
  var text = document.createTextNode(tipusEspai);
  // PENJAM EL TEXT EN DIV
  nouDiv.appendChild(text);
  // PENJAM EL DIV EN DIV PARE
  pare.appendChild(nouDiv);
}

function modificaMostrador(e) {
  // OBTENIM id = TIPUS D'ESPAI SELECCIONAT
  var idTipusEspai = e.target.id;
  // RECUPERAM NODE DIV PARE
  var pare = document.getElementById(idTipusEspai);
  // MODIFICAM CLASSE
  pare.setAttribute("class", "itemTipusSeleccionat");

  // RECUPERAM VALORS
  var llistaEspais = JSON.parse(getEspaisTipus(idTipusEspai));

  var nomEspai;

  for (var index in llistaEspais) {
    // RECUPERAM INFO
    nomEspai = llistaEspais[index]["nom"];
    // ENVIAM ID DEL TIPUS ESPAI SELECCIONAT I NOM DE L'ESPAI
    // A LA FUNCIÓ AFEGIRDIV1.2 PER CREAR UN DIV PER A CADA ESPAI
    afegirDiv1_2(idTipusEspai, nomEspai);
  }
}

function afegirDiv1_2(idTipusEspai, nomEspai) {
  // RECUPERAM NODE DIV PARE
  var pare = document.getElementById(idTipusEspai);
  // CREAM ELEMENT <div></div>
  var nouDiv = document.createElement("div");
  // DECLARAM ATRIBUTS EN <div></div>
  nouDiv.setAttribute("class", "espaiDiv");
  // CREAM ELEMENT <p></p>
  var tagP = document.createElement("p");
  // DECLARAM ATRIBUTS EN <p></p>
  tagP.setAttribute("class", "espaiNom");
  // CREAM ELEMENT <button></button>
  var tagButton = document.createElement("button");
  // CREAM ELEMENT TEXT AMB TIPUS ESPAI
  var text = document.createTextNode(nomEspai);
  // PENJAM EL TEXT EN <p></p>
  tagP.appendChild(text);
  // CREAM TEXT PER <button></button>
  text = document.createTextNode("Més");
  // PENJAM EL TEXT EN <button></button>
  tagButton.appendChild(text);
  // PENJAM <button></button> EN <p></p>
  tagP.appendChild(tagButton);
  // PENJAM <p></p> EN <div></div>
  nouDiv.appendChild(tagP);
  // PENJAM EL DIV EN DIV PARE
  pare.appendChild(nouDiv);
}
