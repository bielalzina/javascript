class Alumne {
  constructor(nom, llinatges, curs) {
    this.nom = nom;
    this.llinatges = llinatges;
    this.curs = curs;
    this.moduls = new Set();
  }

  afegirModul(nouModul) {
    this.moduls.add(nouModul);
  }

  eliminarModul(modul) {
    this.moduls.delete(modul);
  }

  get nomComplet() {
    return this.llinatges + ", " + this.nom;
  }
}

class Modul {
  constructor(nom, codi, curs) {
    this.nom = nom;
    this.codi = codi;
    this.curs = curs;
  }
}
