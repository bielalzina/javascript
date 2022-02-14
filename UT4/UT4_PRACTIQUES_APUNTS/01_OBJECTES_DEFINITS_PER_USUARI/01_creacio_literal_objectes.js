let jo = {
  nom: "JO",
  llinatges: "MATEIX",
  mostrarNomComplet: function () {
    return this.nom + " " + this.llinatges;
  },
};

console.log(jo.mostrarNomComplet());

let tu = {};
tu.nom = "TU";
tu.llinatges = "MATEIX";
tu.mostrarNomComplet = function () {
  return this.nom + " " + this.llinatges;
};

console.log(tu.mostrarNomComplet());
