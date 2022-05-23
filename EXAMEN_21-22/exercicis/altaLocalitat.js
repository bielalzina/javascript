window.onload = function () {
  function carregaIlles() {
    const url = "http://52.178.39.51:8082/illes";
    const req = new XMLHttpRequest();
    const select = document.getElementById("illes");
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          //console.log(req.responseText);
          const resultat = JSON.parse(req.responseText);

          resultat.forEach((element) => {
            const option = document.createElement("option");
            option.appendChild(document.createTextNode(element.nomIlla));
            option.setAttribute("id", "idIlla");
            option.setAttribute("value", element.idIlla);
            select.appendChild(option);
          });
        } else {
          const missatge = JSON.parse(req.responseText);
          select.append(document.createTextNode(missatge.error));
        }
      }
    });
    req.open("GET", url);
    req.send();
  }
  carregaIlles();
  const formulari = document.getElementById("formulari");

  formulari.addEventListener("submit", (e) => {
    e.preventDefault();
    let localitat = {};
    localitat.idLocalitat = document.getElementById("idLocalitat").value;
    localitat.idIlla = document.getElementById("idIlla").value;
    localitat.nomLocalitat = document.getElementById("nomLocalitat").value;
    console.log(JSON.stringify(localitat));
    const url = "http://52.178.39.51:8082/localitats";
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
      if (req.readyState == 4) {
        if (req.status == 200) {
          const missatge = JSON.parse(req.responseText);
          alert(missatge.missatge);
          formulari.reset();
        } else {
          const missatge = JSON.parse(req.responseText);
          alert(missatge.missatge);
        }
      }
    });
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Accept", "application/json");
    req.send(JSON.stringify(localitat));
  });
};
