window.onload = function () {
  //Variables
  const adreca = document.getElementById("adreca");
  const adrecaFac = document.getElementById("adrecaFac");

  const codiPostal = document.getElementById("codiPostal");
  const codiPostalFac = document.getElementById("codiPostalFac");

  const localitat = document.getElementById("localitat");
  const localitatFac = document.getElementById("localitatFac");

  // Funció per copia valors de adreça contacte -> adreça facturacio

  function copiaValor() {
    adrecaFac.value = adreca.value;
    codiPostalFac.value = codiPostal.value;
    localitatFac.value = localitat.value;
  }

  // Funció per anular Listeners

  function anulaListeneres() {
    adreca.removeEventListener("change", copiaValor);
    codiPostal.removeEventListener("change", copiaValor);
    localitat.removeEventListener("change", copiaValor);
  }

  // Esdeveniments per copiar valors de adreça contacte -> adreça facturacio

  adreca.addEventListener("change", copiaValor);
  codiPostal.addEventListener("change", copiaValor);
  localitat.addEventListener("change", copiaValor);

  // Esdeveniments que anulen listeners anteriors

  adrecaFac.addEventListener("keydown", anulaListeneres);
  codiPostalFac.addEventListener("keydown", anulaListeneres);
  localitatFac.addEventListener("keydown", anulaListeneres);
};
