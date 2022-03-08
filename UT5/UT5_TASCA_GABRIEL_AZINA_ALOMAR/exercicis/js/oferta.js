// EXERCICI 3.1 i 3.2

function noPermetreA(e) {
  const avis = document.getElementById("avis");

  if (e.key == "a" || e.key == "A") {
    e.preventDefault();
    avis.setAttribute("class", "alert alert-danger");
    setTimeout(() => avis.setAttribute("class", "hidden"), 3000);
  }
}

// EXERCICI 4 VALIDACIÓ FORMULARI

function validaForm(e) {
  e.preventDefault();

  const titol = document.getElementById("titol").value;
  const dataPublicacio = document.getElementById("dPublicacio").value;
  const dataFinal = document.getElementById("dFinal").value;

  // Comprovam que input TITOL no estigui buit
  if (!validaObligatori(titol)) {
    alert("ÉS OBLIGATORI INDICAR UN TÍTOL");
    e.stopImmediatePropagation();
    return;
  }

  // Comprovam que input DATA PUBLICACIÓ no estigui buit
  if (!validaObligatori(dataPublicacio)) {
    alert("ÉS OBLIGATORI INDICAR UNA DATA DE PUBLICACIÓ");
    e.stopImmediatePropagation();
    return;
  }

  // Comprovam que input DATA FINALITZACIÓ no estigui buit
  if (!validaObligatori(dataFinal)) {
    alert("ÉS OBLIGATORI INDICAR UNA DATA DE FINALITZACIÓ");
    e.stopImmediatePropagation();
    return;
  }

  // Comprovam que data publicacio es anterior a data finalitzacio
  dataPublicacio2 = new Date(dataPublicacio);
  dataFinal2 = new Date(dataFinal);

  if (dataPublicacio2.getTime() >= dataFinal2.getTime()) {
    alert("LA DATA DE PUBLICACIÓ HA DE SER ANTERIOR A LA DATA DE FINALITZACIÓ");
    e.stopImmediatePropagation();
    return;
  }

  // Comprovam que data finalització es posterior a avui

  let avuiAra = Date.now();
  let milisegonsEnUnDia = 1000 * 60 * 60 * 24;
  let avuiNomesData =
    Math.floor(avuiAra / milisegonsEnUnDia) * milisegonsEnUnDia;

  if (avuiNomesData >= dataFinal2.getTime()) {
    alert("LA DATA DE FINALITZACIÓ HA DE SER POSTERIOR A AVUI");
    e.stopImmediatePropagation();
    return;
  }

  // Declaram atributs action i method en formulari
  this.setAttribute("action", "../repGet.html");
  this.setAttribute("method", "GET");

  this.submit();
}

// EXERCICI 5

function generaJSON(e) {
  e.preventDefault();

  const idEmpresaValor = document.querySelector('[name="idEmpresa"]').value;
  const idOfertaValor = document.getElementById("idOferta").value;
  const titolValor = document.getElementById("titol").value;
  const dataPublicacioValor = document.getElementById("dPublicacio").value;
  const dataFinalValor = document.getElementById("dFinal").value;
  const tContracteValor = document.getElementById("tContracte").value;
  const localitatValor = document.getElementById("localitat").value;
  const horariValor = document.getElementById("horari").value;
  const textOfertaValor = document.getElementById("textOferta").value;

  // Comprovam que input TITOL no estigui buit
  if (!validaObligatori(titolValor)) {
    return;
  }

  //Comprovam que input DATA PUBLICACIÓ no estigui buit
  if (!validaObligatori(dataPublicacioValor)) {
    return;
  }

  // Comprovam que input DATA FINALITZACIÓ no estigui buit
  if (!validaObligatori(dataFinalValor)) {
    return;
  }

  // // Comprovam que data publicacio es anterior a data finalitzacio
  dataPublicacio2 = new Date(dataPublicacioValor);
  dataFinal2 = new Date(dataFinalValor);

  if (dataPublicacio2.getTime() >= dataFinal2.getTime()) {
    return;
  }

  // Comprovam que data finalització es posterior a avui

  let avuiAra = Date.now();
  let milisegonsEnUnDia = 1000 * 60 * 60 * 24;
  let avuiNomesData =
    Math.floor(avuiAra / milisegonsEnUnDia) * milisegonsEnUnDia;

  if (avuiNomesData >= dataFinal2.getTime()) {
    return;
  }

  var dades = {
    idEmpresa: idEmpresaValor,
    idOferta: idOfertaValor,
    titol: titolValor,
    dPublicacio: dataPublicacioValor,
    dFinal: dataFinalValor,
    tContracte: tContracteValor,
    localitat: localitatValor,
    horari: horariValor,
    textOferta: textOfertaValor,
  };

  alert(JSON.stringify(dades, null, "\t"));
}

// FUNCIÓ PER VALIDAR QUE INPUT NO SIGUI BUIT NI ESPAIS EN BLANC

function validaObligatori(valor) {
  if ((valor !== null) & (valor !== "undefined")) {
    valor = valor.toString().trim();
    if (valor.length > 0) {
      return true;
    }
  }
  return false;
}

window.onload = function () {
  // Variables
  const formulari = document.getElementById("formOferta");

  // EXERCICI 3

  // Listener

  formulari.addEventListener("keydown", noPermetreA);

  // EXERCICI 4

  // Listener
  formulari.addEventListener("submit", validaForm);

  //EXERCICI 5

  // Listener

  formulari.addEventListener("submit", generaJSON, true);
};
