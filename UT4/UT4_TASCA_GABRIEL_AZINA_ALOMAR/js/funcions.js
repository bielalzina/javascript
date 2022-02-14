// EXERCICI 1

function tornaArrayCentresCulturals() {
  var arrayCentresCulturals = [
    {
      nom: "Museu de la Mar",
      descripcio: "Museu temàtic de la mar: navegants, pesca, maquetes...",
      web: "http://a-soller.tiscalibiz.com/museudelamar",
      email: "cultura@a-soller.es",
      telefon: "(0034) 971 63 84 57",
      poblacio: "Soller",
    },
    {
      nom: "ArtArtà",
      descripcio: "Lloc de difusió de l’artesania i el patrimoni d’Artà",
      web: "http://www.artarta.es/",
      email: "info@artarta.es",
      telefon: "(0034) 971 83 59 39",
      poblacio: "Artà",
    },
    {
      nom: "Cas Metge Cifre",
      descripcio:
        "Destinat a activitats culturals, encara que habitualment funciona com a sala d’exposicions",
      web: "https://incaciutat.com/es",
      email: "cultura@incaciutat.com",
      telefon: "(0034) 871 91 40 00",
      poblacio: "Inca",
    },
    {
      nom: "Museu de Sant Antoni i el Dimoni. Can Planes",
      descripcio:
        "Dedicat a la festa de Sant Antoni: capgrossos, la figura del sant, els dimonis, la música i les cançons populars",
      web: "http://www.ajsapobla.net/",
      email: "museus@sapobla.cat",
      telefon: "(0034) 971 54 23 89",
      poblacio: "Sa Pobla",
    },
  ];
  return arrayCentresCulturals;
}

// EXERCICI 2

function Artista(aNom, aNacionalitat) {
  this.nom = aNom;
  this.nacionalitat = aNacionalitat;
  this.obres = new Set();
}

Artista.prototype.afegirObra = function (novaObra) {
  this.obres.add(novaObra);
};

Artista.prototype.eliminarObra = function (obra) {
  this.obres.delete(obra);
};

Artista.prototype.llistarObres = function () {
  var cadena = "";
  for (titolObra of this.obres.values()) {
    cadena += titolObra + ", ";
  }
  return cadena.substring(0, cadena.length - 2);
};

// EXERCICI 3

class Exposicio {
  constructor(eTitol, eDataInici, eDataFinal, eCentre) {
    this.titol = eTitol;
    this.dataInici = eDataInici;
    this.dataFinal = eDataFinal;
    this.centre = eCentre;
    this.artistes = new Set();
  }
  afegirArtista(nouArtista) {
    this.artistes.add(nouArtista);
  }
  eliminarArtista(artista) {
    this.artistes.delete(artista);
  }
}
