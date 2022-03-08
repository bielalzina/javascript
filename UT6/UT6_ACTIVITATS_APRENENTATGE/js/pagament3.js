function rbCanvia(pId) {
  if (pId == "rbTar") {
    document.getElementById("divTransferencia").className = document
      .getElementById("divTransferencia")
      .className.replace("visible", "ocult");
    document.getElementById("divTargeta").className = document
      .getElementById("divTargeta")
      .className.replace("ocult", "visible");
  } else {
    document.getElementById("divTransferencia").className = document
      .getElementById("divTransferencia")
      .className.replace("ocult", "visible");
    document.getElementById("divTargeta").className = document
      .getElementById("divTargeta")
      .className.replace("visible", "ocult");
  }
}

window.onload = function () {
  document.getElementById("rbTar").onchange = function () {
    rbCanvia("rbTar");
  };
  document.getElementById("rbTrans").onchange = function () {
    rbCanvia("rbTrans");
  };
  document.getElementById("formPrincipal").onreset = function () {
    document.getElementById("divTransferencia").className = document
      .getElementById("divTransferencia")
      .className.replace("visible", "ocult");
    document.getElementById("divTargeta").className = document
      .getElementById("divTargeta")
      .className.replace("visible", "ocult");
    document
      .getElementById("divTargeta")
      .addEventListener("transitionend", function () {
        var op = document.getElementById("divTargeta").style.opacity;
        alert("TRANSITION END DIVTARGETA" + op + ".");
      });
    document
      .getElementById("divTransferencia")
      .addEventListener("transitionend", function () {
        alert("TRANSITION END DIVTRANSFERENCIA");
      });
  };
};
