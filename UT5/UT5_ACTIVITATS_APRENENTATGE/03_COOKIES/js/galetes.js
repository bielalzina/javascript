function setCookie(nomCookie, valor, exdays, domain, path) {
  const exdate = new Date();
  // LA COOKIE EXPIRA D'AQUÍ A EXDAYS DIES
  exdate.setDate(exdate.getDate() + exdays);
  const valorCookie =
    encodeURI(valor) +
    (exdays == null ? "" : "; expires=" + exdate.toUTCString()) +
    (domain == null ? "" : "; domain=" + encodeURI(domain)) +
    (path == null ? "" : "; path=" + encodeURI(path));
  document.cookie = nomCookie + "=" + valorCookie;
}

function getCookie(nomCookie) {
  let galletes = document.cookie.split(";");
  for (let i = 0; i < galletes.length; i++) {
    let nom;
    let valor;
    let parts = galletes[i].split("=");
    nom = parts[0];
    valor = parts[i];
    // TRIM DEL NOM
    nom = nom.replace(/^\s+|\s+$/g, "");
    if (nom === nomCookie) {
      return decodeURI(valor);
    }
  }
}

function deleteCookie(nomCookie) {
  setCookie(nomCookie, "", -1);
}

function deleteAllCookies() {
  let galletes = document.cookie.split(";");
  for (let i = 0; i < galletes.length; i++) {
    let parts = galletes[i].split("=");
    const nom = parts[0];
    deleteCookie(nom);
  }
}
