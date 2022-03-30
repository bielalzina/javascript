window.onload = function () {
    const servidor = "http://52.178.39.51:8080";

    function createP(nom, valor) {
        const p = document.createElement("p");
        const label = document.createElement("span");
        label.className = "label";
        label.appendChild(document.createTextNode(nom + ": "));
        p.appendChild(label);
        p.appendChild(document.createTextNode(valor));
        return p;
    }

    function extreureDades(pare, camp) {
        if (pare) {
            const element = pare.getElementsByTagName(camp)[0];
            if (element.childNodes[0]) {
                return element.childNodes[0].nodeValue;
            }
        }
        return "";
    }

    function carregaLlibresLlengua() {
        const llibreria = document.getElementById("llibreria");
        while (llibreria.lastChild) {
            llibreria.removeChild(llibreria.lastChild);
        }
        const llengua = document.getElementById("sLlengues").value;
        const url = servidor + "/llibres/perLlengua/" + llengua;
        fetch(url, { method: "GET", headers: { Accept: "application/xml" } })
            .then(async (resultat) => {
                if (!resultat.ok) {
                    let error = await resultat.json();
                    throw new Error(
                        resultat.status +
                            " Error en la recuperació " +
                            error.error
                    );
                }
                return resultat.text();
            })
            .then((resultat) => {
                //Si tot ha anat bé dins resultat tenim les dades Javascript.
                if (resultat.length > 0) {
                    let dom = new DOMParser().parseFromString(
                        resultat,
                        "application/xml"
                    );
                    dom.getElementsByTagName("item").forEach((llibre) => {
                        const div = document.createElement("div");
                        div.className = "divLlibre";
                        const titol = document.createElement("h3");
                        titol.appendChild(
                            document.createTextNode(
                                llibre.getElementsByTagName("titol")[0]
                                    .textContent
                            )
                        );
                        div.appendChild(titol);
                        div.appendChild(
                            createP(
                                "Editorial",
                                llibre.getElementsByTagName("idEdit")[0]
                                    .textContent
                            )
                        );
                        div.appendChild(
                            createP(
                                "ISBN",
                                llibre.getElementsByTagName("isbn")[0]
                                    .textContent
                            )
                        );
                        div.appendChild(
                            createP(
                                "Depòsit legal",
                                llibre.getElementsByTagName("deplegal")[0]
                                    .textContent
                            )
                        );
                        llibreria.appendChild(div);
                    });
                } else {
                    const div = document.createElement("div");
                    div.className = "divLlibre";
                    const titol = document.createElement("h3");
                    titol.appendChild(
                        document.createTextNode(
                            "No hi ha llibres en aquesta llengua"
                        )
                    );
                    div.appendChild(titol);
                    llibreria.appendChild(div);
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    //Carregar llengues
    fetch(servidor + "/llengues")
        .then((resultat) => {
            if (!resultat.ok) {
                throw new Error(
                    resultat.status +
                        " Error en la recuperació " +
                        resultat.statusText
                );
            }
            return resultat.json();
        })
        .then((resultat) => {
            //Si tot ha anat bé dins resultat tenim les dades Javascript.
            const select = document.getElementById("sLlengues");
            resultat.forEach((llengua) => {
                const option = document.createElement("option");
                option.appendChild(document.createTextNode(llengua.llengua));
                select.appendChild(option);
            });
        })
        .catch((error) => {
            llibreria.append(document.createTextNode(error));
        });

    document
        .getElementById("sLlengues")
        .addEventListener("change", carregaLlibresLlengua);
};
