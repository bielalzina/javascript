function Aplicacio(pnom, ptipus, pdescripcio, ppreu) {
  this.nom = pnom;
  this.tipus = ptipus;
  this.descripcio = pdescripcio;
  this.preu = ppreu;
  this.descarregues = 0;

  this.augmentaDescarregues = function () {
    this.descarregues++;
  };
}

// GETTERS

Aplicacio.prototype.getNom = function () {
  return this.nom;
};

Aplicacio.prototype.getTipus = function () {
  return this.tipus;
};

Aplicacio.prototype.getDescripcio = function () {
  return this.descripcio;
};

Aplicacio.prototype.getPreu = function () {
  return this.preu;
};

Aplicacio.prototype.getDescarregues = function () {
  return this.descarregues;
};

// SETTERS

Aplicacio.prototype.setNom = function (nouNom) {
  this.nom = nouNom;
};

Aplicacio.prototype.setTipus = function (nouTipus) {
  this.tipus = nouTipus;
};

Aplicacio.prototype.setDescripcio = function (nouDescripcio) {
  this.descripcio = nouDescripcio;
};

Aplicacio.prototype.setPreu = function (nouPreu) {
  this.preu = nouPreu;
};

Aplicacio.prototype.setDescarregues = function (nouDescarregues) {
  this.descarregues = nouDescarregues;
};

//ALTRES

Aplicacio.prototype.comentari = "Sense comentaris";

Aplicacio.prototype.canviaComentari = function (nouComentari) {
  this.comentari = nouComentari;
};

Aplicacio.prototype.setNom2 = function (nouNom) {
  this.nom = nouNom;
};

// var WS = new Aplicacio(
//   "WHATSAPP",
//   "COMUNICACIO",
//   "SERVEIX PER XATEJAR",
//   "GRATUIT"
// );

// console.log();
// console.log(WS.toString());

// Aplicacio.prototype.toString = function appToString() {
//   var retorno =
//     "NOM: " +
//     this.nom +
//     " ** TIPUS: " +
//     this.tipus +
//     " ** DESCRIPCIO: " +
//     this.descripcio +
//     " ** PREU: " +
//     this.preu +
//     " ** DESCARREGUES: " +
//     this.descarregues;
//   return retorno;
// };

// console.log();
// console.log(WS.toString());
