window.onload = function () {
    const url = "http://52.178.39.51:8080/autors/";
    let quantitat = prompt("Num. d'autors per pàgina?");
    let paginaActual = prompt("Num. de pàgina a mostrar?");

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
        if (longitud == quantitat) {
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

    // CARREGAM AUTORS

    function carregaAutors() {
        const servidor = url + paginaActual + "/" + quantitat;

        const llista = document.getElementById("llista");
        neteja(llista);
        fetch(servidor)
            .then((resultat) => {
                if (!resultat.ok) {
                    throw new Error(
                        resultat.status +
                            " ERROR EN LA RECUPERACIÓ DE DADES " +
                            resultat.statusText
                    );
                }
                return resultat.json();
            })
            .then((resultat) => {
                resultat.forEach((autor) => {
                    const li = document.createElement("li");
                    li.appendChild(document.createTextNode(autor.nomAut));
                    llista.appendChild(li);
                });
                creaLinks(resultat.length);
            })
            .catch((error) => {
                alert(error);
            });
    }
    carregaAutors();
};
