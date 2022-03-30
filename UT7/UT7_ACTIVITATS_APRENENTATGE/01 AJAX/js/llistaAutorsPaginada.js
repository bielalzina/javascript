window.onload = function () {
    let paginaActual = 0;

    function neteja(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }

    function creaLinks(longitud) {
        console.log(longitud);
        const enllaços = document.getElementById("links");
        neteja(enllaços);
        if (paginaActual > 0) {
            const anterior = document.createElement("button");
            anterior.appendChild(document.createTextNode("ANTERIOR"));
            anterior.setAttribute("type", "button");
            anterior.addEventListener("click", function () {
                paginaActual--;
                carregaAutors();
            });
            enllaços.appendChild(anterior);
        }
        enllaços.appendChild(document.createTextNode(" " + paginaActual + " "));
        if (longitud == 50) {
            const seguent = document.createElement("button");
            seguent.appendChild(document.createTextNode("SEGÜENT"));
            seguent.setAttribute("type", "button");
            seguent.addEventListener("click", function () {
                paginaActual++;
                carregaAutors();
            });
            enllaços.appendChild(seguent);
        }
    }

    function carregaAutors() {
        const url =
            "http://52.178.39.51:8080/autors/" + paginaActual + "/" + 50;
        const req = new XMLHttpRequest();
        const llista = document.getElementById("llista");
        req.addEventListener("readystatechange", function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    neteja(llista);
                    const resultat = JSON.parse(req.responseText);
                    console.log(resultat);
                    for (const autor of resultat) {
                        const li = document.createElement("li");
                        li.appendChild(document.createTextNode(autor.nomAut));
                        llista.appendChild(li);
                    }
                    creaLinks(resultat.length);
                } else {
                    const missatge = JSON.parse(req.responseText);
                    alert(document.createTextNode(missatge.error));
                }
            }
        });
        req.open("GET", url);
        req.setRequestHeader("Accept", "application/json");
        req.send();
    }
    carregaAutors();
};
