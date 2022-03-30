window.onload = function () {
  //RECUPERAM TIPUS ESPAIS
  let espais = JSON.parse(getTipus());

  let idEspai;
  let tipusEspai;

  for (var index in espais) {
    // RECUPERAM INFO
    idEspai = espais[index]["id"];
    tipusEspai = espais[index]["cat"].toUpperCase();
    // ENVIAM VALOR id I cat A LA FUNCIÓ AFEGIRDIV1.1 PER CREAR UN DIV
    // PER A CADA TIPUS D'ESPAI
    afegirDiv1_1(idEspai, tipusEspai);
  }

  // RECUPERAM ESPAI SELECCIONAT

  let espaiSeleccionat1 = document.getElementsByClassName("itemTipus");

  // AFEGIM LISTENER

  for (var i = 0; i < espaiSeleccionat1.length; i++) {
    espaiSeleccionat1[i].addEventListener("mousedown", modificaLlistaTipus);
  }
};

function afegirDiv1_1(idEspai, tipusEspai) {
  // RECUPERAM NODE DIV PARE
  let pare = document.getElementById("llistaTipus");

  // CREAM ELEMENT <div></div>
  let nouDiv = document.createElement("div");
  // DECLARAM ATRIBUTS EN <div></div>
  nouDiv.setAttribute("class", "itemTipus");
  nouDiv.setAttribute("id", idEspai);
  // CREAM ELEMENT TEXT AMB TIPUS ESPAI
  let text = document.createTextNode(tipusEspai);
  // PENJAM EL TEXT EN DIV
  nouDiv.appendChild(text);
  // PENJAM EL DIV EN DIV PARE
  pare.appendChild(nouDiv);
}

function modificaLlistaTipus(e) {
  // COMPROVAM SI ALGUN ITEM HA ESTAT PREVIAMENT SELECCIONAT
  // EN TEÒRIA N'HI POT HAVER 0 O 1 COM A MÀXIM
  let itemPreviamentSeleccionat = document.getElementsByClassName(
    "itemTipusSeleccionat"
  );

  if (itemPreviamentSeleccionat.length > 0) {
    // SI EXISTEIX -> true, MODIFICAM CLASS
    itemPreviamentSeleccionat[0].setAttribute("class", "itemTipus");
    // ELIMINAM EL CONTINGUT DEL DIV MOSTRADOR
    let divMostrador = document.getElementById("mostrador");

    while (divMostrador.hasChildNodes()) {
      divMostrador.removeChild(divMostrador.firstChild);
    }
  }

  // OBTENIM id = TIPUS D'ESPAI SELECCIONAT
  let idTipusEspai = e.target.id;
  // CAPTURAM DIV TIPUS ESPAI SELECCIONAT
  let divTipusEspaiSeleccionat = document.getElementById(idTipusEspai);
  // MODIFICAM CLASSE
  divTipusEspaiSeleccionat.setAttribute("class", "itemTipusSeleccionat");

  // RECUPERAM VALORS
  let llistaEspais = JSON.parse(getEspaisTipus(idTipusEspai));

  let nomEspai;

  for (var index in llistaEspais) {
    // RECUPERAM INFO
    nomEspai = llistaEspais[index]["nom"];
    // ENVIAM ID DEL TIPUS ESPAI SELECCIONAT I NOM DE L'ESPAI
    // A LA FUNCIÓ AFEGIRDIV1.2 PER CREAR UN DIV PER A CADA ESPAI
    afegirDiv1_2(idTipusEspai, nomEspai);
  }

  // EXERCICI 1.3
  // UN COP AFEGITS ELS DIVS, PODEM DONAR FUNCIONALITAT AL BUTO
  // RECUPERAM ELS TAGS <p></p> CREATS DINS EL DIV
  let espaiSeleccionat2 = document.getElementsByClassName("espaiNom");
  // AQUEST ELEMENT <p></p> TE DOS FILLS:
  // 0: text
  // 1: button
  // CAL AFEGIR UN LISTENER AL BOTO, EL QUAL ÉS EL DARRER FILL DE <p></p>
  for (var i = 0; i < espaiSeleccionat2.length; i++) {
    espaiSeleccionat2[i].lastChild.addEventListener(
      "mousedown",
      modificaDiv1_3
    );
  }
}

function afegirDiv1_2(idTipusEspai, nomEspai) {
  // RECUPERAM NODE DIV PARE
  let pare = document.getElementById("mostrador");
  // CREAM ELEMENT <div></div>
  let nouDiv = document.createElement("div");
  // DECLARAM ATRIBUTS EN <div></div>
  nouDiv.setAttribute("class", "espaiDiv");
  // CREAM ELEMENT <p></p>
  let tagP = document.createElement("p");
  // DECLARAM ATRIBUTS EN <p></p>
  tagP.setAttribute("class", "espaiNom");
  // AQUEST ATRIBUT ENS FACILITARA LA RECERCA DE L'id EN EXERCICI 1.3
  tagP.setAttribute("value", idTipusEspai);
  // CREAM ELEMENT <button></button>
  let tagButton = document.createElement("button");
  // CREAM ELEMENT TEXT AMB TIPUS ESPAI
  let text = document.createTextNode(nomEspai);
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

function modificaDiv1_3(e) {
  // CAPTURAM BUTTON
  let buttonTag = e.target;
  // CAPTURAM EL PARE DE BUTTON
  let pTag = buttonTag.parentNode;
  // ELIMINAM BOTO
  buttonTag.remove();
  //CAPTURAM NOM DE L'ESPAI
  let nomEspai = pTag.textContent;
  // RECUPERAM ID DEL TIPUS D'ESPAI SELECCIONAT,

  /* 
  INICIALMENT HO HAVIA PROGRAMAT RECUPERANT ID DE L'ELEMENT 
  AMB CLASS="itemTipusSeleccionat"
  
  let espaiSeleccionat3 = document.getElementsByClassName(
    "itemTipusSeleccionat"
  );
  let idTipusEspai = espaiSeleccionat3[0].id;
  
  POSTERIORMENT VAIG AFEGIR L'ID EN ATRIBUT value 
  DEL TAG <p></p> PER FACILITAR LA RECERCA
  */

  let idTipusEspai = pTag.getAttribute("value");

  // RECUPERAM VALORS
  let llistaEspais = JSON.parse(getEspaisTipus(idTipusEspai));
  // COMPARAM nomEspai AMB llistaEspais[nom] PER LOCALITZAR L'ITEM
  // PEL QUAL VOLEM RECUPERAR LES DADES
  // ABANS DECLARAM VARIABLES
  let descripcioCat;
  let web;
  let email;
  let telefon;
  for (var index in llistaEspais) {
    if (llistaEspais[index]["nom"] == nomEspai) {
      descripcioCat = llistaEspais[index]["descripcions"]["cat"];
      email = llistaEspais[index]["email"];
      telefon = llistaEspais[index]["telefon"];
      web = llistaEspais[index]["web"];
    }
  }

  // CAPTURAM EL PARE DE pTag -> espaiDiv
  let divTag = pTag.parentNode;
  // AFEGIM DADES A espaidIV
  // DESCRIPCIO CAT
  let text = document.createTextNode(descripcioCat);
  let tagP1 = document.createElement("p");
  tagP1.appendChild(text);
  divTag.appendChild(tagP1);
  // WEB
  text = document.createTextNode(web);
  let tagA2 = document.createElement("a");
  tagA2.appendChild(text);
  tagA2.setAttribute("href", "https://" + web);
  let tagP2 = document.createElement("p");
  tagP2.appendChild(tagA2);
  divTag.appendChild(tagP2);
  // EMAIL
  text = document.createTextNode(email);
  let tagA3 = document.createElement("a");
  tagA3.appendChild(text);
  tagA3.setAttribute("href", "email:" + email);
  let tagP3 = document.createElement("p");
  tagP3.appendChild(tagA3);
  divTag.appendChild(tagP3);
  // TELEFON
  text = document.createTextNode(telefon);
  let tagA4 = document.createElement("a");
  tagA4.appendChild(text);
  tagA4.setAttribute("href", "tel:" + telefon);
  let tagP4 = document.createElement("p");
  tagP4.appendChild(tagA4);
  divTag.appendChild(tagP4);
}
