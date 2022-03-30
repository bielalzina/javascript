window.onload = function () {
  // RECUPERAM VALORS
  let llistaServeis = JSON.parse(getServeis());
  let llistaTipus = JSON.parse(getTipus());
  let llistaModalitats = JSON.parse(getModalitats());
  //AFEGIM SERVEIS, PASSANT VALORS PER DEFINIR
  // ELEMENTS <label></label> i <input/>
  afegir1(llistaServeis, "serveis", "checkbox", "servei", "s");
  //AFEGIM TIPUS
  afegir1(llistaTipus, "tipus", "radio", "tipus", "t");
  //AFEGIM MODALITATS
  afegir1(llistaModalitats, "modalitats", "checkbox", "modalitat", "m");
};

function afegir1(llistaItems, idDiv, inputType, inputName, partId) {
  // RECUPERAM DADES PER CONFIGURAR <label></label> i <input/>
  let descripcioItem;
  let idItem;
  for (var index in llistaItems) {
    descripcioItem = llistaItems[index]["cat"];
    idItem = llistaItems[index]["id"];
    // CRIDAM FUNCIO afegir2() PASSANT PARAMETRES PER DEFINIR
    // ELEMENTS <label></label> i <input/>; ALGUNS D'AQUESTS PARAMETRES
    // JA HAN ESTAT INDICAT EN afegir1()
    afegir2(descripcioItem, idItem, idDiv, inputType, inputName, partId);
  }
}

function afegir2(descripcioItem, idItem, idDiv, inputType, inputName, partId) {
  // CAPTURAM ELEMENT DIV AMB id=idDiv
  let divPare = document.getElementById(idDiv);
  // CREAM NODES, ASSIGNAM VALORS I ATRIBUTS ALS NODES
  // DESCRIPCIÓ
  let text = document.createTextNode(descripcioItem);
  // LABEL
  let tagLabel = document.createElement("label");
  tagLabel.appendChild(text);
  tagLabel.setAttribute("for", partId + idItem);
  divPare.appendChild(tagLabel);
  // INPUT
  let tagInput = document.createElement("input");
  tagInput.setAttribute("type", inputType);
  tagInput.setAttribute("id", partId + idItem);
  tagInput.setAttribute("name", inputName);
  tagInput.setAttribute("value", idItem);
  divPare.appendChild(tagInput);
}

/* function afegirServeis() {
  //RECUPERAM SERVEIS
  let llistaServeis = JSON.parse(getServeis());
  // RECUPERAM DADES PER CONFIGURAR <label></label> i <input/>
  let descripcioServei;
  let idServei;
  for (var index in llistaServeis) {
    descripcioServei = llistaServeis[index]["cat"];
    idServei = llistaServeis[index]["id"];
    afgegirTags2_1(descripcioServei, idServei);
  }
}

function afgegirTags2_1(descripcioServei, idServei) {
  // CAPTURAM DIV AMB id="serveis"
  let divServeis = document.getElementById("serveis");
  // CREAM NODES, ASSIGNAM VALORS I ATRIBUTS ALS NODES
  // DESCRIPCIÓ DEL SERVEI
  let text = document.createTextNode(descripcioServei);
  // LABEL
  let tagLabel = document.createElement("label");
  tagLabel.appendChild(text);
  tagLabel.setAttribute("for", "s" + idServei);
  divServeis.appendChild(tagLabel);
  // INPUT
  let tagInput = document.createElement("input");
  tagInput.setAttribute("type", "checkbox");
  tagInput.setAttribute("id", "s" + idServei);
  tagInput.setAttribute("name", "servei");
  tagInput.setAttribute("value", idServei);
  divServeis.appendChild(tagInput);
}

function afegirtipus() {
  //RECUPERAM TIPUS
  let llistaTipus = JSON.parse(getTipus());
  // RECUPERAM DADES PER CONFIGURAR <label></label> i <input/>
  let descripcioTipus;
  let idTipus;
  for (var index in llistaTipus) {
    descripcioTipus = llistaTipus[index]["cat"];
    idTipus = llistaTipus[index]["id"];
    afgegirTags2_2(descripcioTipus, idTipus);
  }
}

function afgegirTags2_2(descripcioTipus, idTipus) {
  // CAPTURAM DIV AMB id="tipus"
  let divTipus = document.getElementById("tipus");
  // CREAM NODES, ASSIGNAM VALORS I ATRIBUTS ALS NODES
  // DESCRIPCIÓ DEL TIPUS
  let text = document.createTextNode(descripcioTipus);
  // LABEL
  let tagLabel = document.createElement("label");
  tagLabel.appendChild(text);
  tagLabel.setAttribute("for", "t" + idTipus);
  divTipus.appendChild(tagLabel);
  // INPUT
  let tagInput = document.createElement("input");
  tagInput.setAttribute("type", "radio");
  tagInput.setAttribute("id", "t" + idTipus);
  tagInput.setAttribute("name", "tipus");
  tagInput.setAttribute("value", idTipus);
  divTipus.appendChild(tagInput);
}
 */
