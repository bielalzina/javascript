window.onload = function () {
  document.getElementById("bAnar").onclick = function () {
    var url = document.getElementById("url").value;
    if (url.length > 0) {
      location.assign(url);
    } else {
      alert("Cal introduir una URL");
    }
  };
  document.getElementById("bTornar").onclick = function () {
    //history.go(-1);
    history.back();
  };
  document.getElementById("bRecarregar").onclick = function () {
    location.reload();
  };
};
