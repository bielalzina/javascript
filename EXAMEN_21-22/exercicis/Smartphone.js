class Smartphone {
  constructor(model, marca, ram, so, versioSo, g5) {
    this.model = model;
    this.marca = marca;
    this.ram = ram;
    this.so = so;
    this.versioSo = versioSo;
    this.g5 = g5;
  }

  get soVersio() {
    let cadena =
      "SISTEMA OPERATIU: " + this.so + " (VERSIO: " + this.versioSo + ")";
    return cadena;
  }

  get obteJSON() {
    return JSON.stringify(this);
  }
}
