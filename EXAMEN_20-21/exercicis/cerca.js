window.onload = function () {
  const mostrador = document.getElementById("mostrador");

  function buidaElement(element) {
    while (element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }

  document.getElementById("formulari").addEventListener("submit", function (e) {
    e.preventDefault();
    const textACercar = document.getElementById("titol").value.toUpperCase();

    //console.log(textACercar);
    if (textACercar != "") {
      buidaElement(mostrador);
      const filmsTots = JSON.parse(getFilmsACA());
      //console.log(filmsTots);
      let filmsTrobats = [];
      filmsTots.forEach((element) => {
        if (element.title.includes(textACercar)) {
          filmsTrobats.push(element);
        }
      });
      //console.log(filmsTrobats);
      filmsTrobats.forEach((element) => {
        const h3 = document.createElement("h3");
        h3.appendChild(document.createTextNode(element.title));
        const div = document.createElement("div");
        div.appendChild(h3);
        mostrador.appendChild(div);
      });
    }
  });

  document.getElementById("titol").addEventListener("keyup", function () {
    buidaElement(mostrador);
  });
};
