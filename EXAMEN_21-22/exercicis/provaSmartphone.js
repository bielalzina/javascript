window.onload = function () {
  const mostrador = document.getElementById("mostrador");

  const elMeuSmart = new Smartphone(
    "MI-116",
    "XIAOMI",
    "6 GB",
    "ANDROID",
    "11.5-stable",
    true
  );

  let jsonObject = elMeuSmart.obteJSON;

  mostrador.innerHTML = jsonObject;
};
