function Persona(nom, llinatges) {
  this.nom = nom;
  this.llinatges = llinatges;
  this.mostraNomComplet = function () {
    return nom + " " + llinatges;
  };
}

var jo = new Persona("JO", "MATEIX");
console.log(jo.mostraNomComplet());

var tu = new Persona("ELLA", "MATEIXA");
console.log(tu.mostraNomComplet());

// PROTOTYPE

function alumne(nom, llinatges) {
  this.nom = nom;
  this.llintages = llinatges;
}

alumne.prototype.getNom = function () {
  return this.nom;
};

var ell = new alumne("GABRIEL", "ALZINA");
console.log(ell.getNom());
