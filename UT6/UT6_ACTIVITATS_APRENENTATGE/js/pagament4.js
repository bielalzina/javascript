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
function amagaAjuda() {
  var capa = document.getElementById("divAjuda");
  capa.removeChild(capa.lastChild);
}

function mostraAjuda(pId) {
  var capa = document.getElementById("divAjuda");
  var textAjuda = document.getElementById(pId).getAttribute("title");
  var text = document.createTextNode(textAjuda);
  capa.appendChild(text);
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
  document.getElementById("tNom").onfocus = function () {
    mostraAjuda("tNom");
  };
  document.getElementById("tNom").onblur = function () {
    amagaAjuda("tNom");
  };

  document.getElementById("tLlinatges").onfocus = function () {
    mostraAjuda("tLlinatges");
  };
  document.getElementById("tLlinatges").onblur = function () {
    amagaAjuda("tLlinatges");
  };

  document.getElementById("tDNI").onfocus = function () {
    mostraAjuda("tDNI");
  };
  document.getElementById("tDNI").onblur = function () {
    amagaAjuda("tDNI");
  };

  document.getElementById("tEmail").onfocus = function () {
    mostraAjuda("tEmail");
  };
  document.getElementById("tEmail").onblur = function () {
    amagaAjuda("tEmail");
  };

  document.getElementById("numTargeta").onfocus = function () {
    mostraAjuda("numTargeta");
  };
  document.getElementById("numTargeta").onblur = function () {
    amagaAjuda("numTargeta");
  };

  document.getElementById("cadTargeta").onfocus = function () {
    mostraAjuda("cadTargeta");
  };
  document.getElementById("cadTargeta").onblur = function () {
    amagaAjuda("cadTargeta");
  };

  document.getElementById("cvsTargeta").onfocus = function () {
    mostraAjuda("cvsTargeta");
  };
  document.getElementById("cvsTargeta").onblur = function () {
    amagaAjuda("cvsTargeta");
  };
};
