window.onload = function () {
  let formOK = false;

  function validaObligatori(id) {
    //console.log(id);
    let valor = document.getElementById(id).value;
    //console.log(valor);
    if (
      valor != null &&
      typeof valor != "undefined" &&
      valor.toString().trim().length > 0
    ) {
      //console.log(true);
      return true;
    } else {
      //console.log(false);
      return false;
    }
  }

  function canviaColorLabel(id) {
    let tagOrigen = document.getElementById(id);
    let tagPare = tagOrigen.parentNode;
    let tagFills = tagPare.children;

    tagFills[0].style.color = "red";
  }

  function validaFormulari(event) {
    let formOK = true;
    event.preventDefault();

    if (!validaObligatori("marca")) {
      canviaColorLabel("marca");
      formOK = false;
    }
    if (!validaObligatori("model")) {
      canviaColorLabel("model");
      formOK = false;
    }
    if (!validaObligatori("vesioSO")) {
      canviaColorLabel("vesioSO");
      formOK = false;
    }
    if (!validaObligatori("gb")) {
      canviaColorLabel("gb");
      formOK = false;
    }

    const android = document.getElementById("android");
    const ios = document.getElementById("ios");

    if (formOK) {
      document.getElementById("formulari").submit();
    }
  }

  document
    .getElementById("formulari")
    .addEventListener("submit", validaFormulari);
};
