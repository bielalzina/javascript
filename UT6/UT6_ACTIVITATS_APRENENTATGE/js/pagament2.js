function rbCanvia(pId) {
  if (pId == "rbTar") {
    document.getElementById("divTargeta").style.display = "block";
    document.getElementById("divTransferencia").style.display = "none";
  } else {
    document.getElementById("divTargeta").style.display = "none";
    document.getElementById("divTransferencia").style.display = "block";
  }
}

window.onload = function () {
  document.getElementById("rbTar").onchange = function () {
    rbCanvia("rbTar");
  };
  document.getElementById("rbTrans").onchange = function () {
    rbCanvia("rbTrans");
  };
  document.getElementById("divTargeta").style.display = "none";
  document.getElementById("divTransferencia").style.display = "none";
};
