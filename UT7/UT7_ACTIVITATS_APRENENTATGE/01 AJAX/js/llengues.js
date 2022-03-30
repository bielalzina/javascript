window.onload = function () {
  const url = "http://52.178.39.51:8080/llengues";
  const req = new XMLHttpRequest();
  req.addEventListener("readystatechange", function () {
    if (req.readyState == 4) {
      console.log("req.readyState: " + req.readyState);
      if (req.status == 200) {
        console.log("req.status: " + req.status);
        console.log(JSON.parse(req.responseText));
        const resultat = JSON.parse(req.responseText);
        const llista = document.getElementById("llista");
        for (const llengua of resultat) {
          const li = document.createElement("li");
          li.appendChild(document.createTextNode(llengua.llengua));
          llista.appendChild(li);
        }
      } else {
        const missatge = req.responseText;
        console.log("missatge: " + missatge);
        console.log("missatge.error: " + missatge.error);
        const ul = document.getElementById("llista");
        ul.append(document.createTextNode(missatge.error));
      }
    }
  });
  req.open("GET", url);
  req.send();
};
