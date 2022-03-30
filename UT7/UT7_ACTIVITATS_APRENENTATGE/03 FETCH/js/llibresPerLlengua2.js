window.onload = function () {
    const servidor = "http://52.178.39.51:8080";

    function createP(nom, valor) {
        const p = document.createElement("p");
        const label = document.createElement("label");
        label.className = "label";
        label.appendChild(document.createTextNode(nom + ": "));
        p.appendChild(label);
        p.appendChild(document.createTextNode(valor));
        return p;
    }

    function carregaLlibresLlengua() {
        const llibreria = document.getElementById("llibreria");

        // NETEJAM DIV (PER SI TÉ CONTINGUT)
        while (llibreria.lastChild) {
            llibreria.removeChild(llibreria.lastChild);
        }

        const llengua = document.getElementById("sLlengues").value;
        const url = servidor + "/llibres/perLlengua/" + llengua;
        fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" },
        })
            .then(async (resultat) => {
                if (!resultat.ok) {
                    let error = await resultat.json();
                    throw new Error(
                        resultat.status +
                            " ERROR EN LA RECUPERACIÓ " +
                            error.error
                    );
                }
                return resultat.json();
            })
            .then((resultat) => {
                //SI TOT HA ANAT BE, DINS RESULTAT TENIM LES DADES
                if (resultat.length > 0) {
                    resultat.forEach((llibre) => {
                        const div = document.createElement("div");
                        div.className = "divLlibre";
                        const titol = document.createElement("h3");
                        titol.appendChild(
                            document.createTextNode(llibre.titol)
                        );
                        div.appendChild(titol);
                        div.appendChild(
                            createP("EDITORIAL", llibre.fkIdedit.idEdit)
                        );
                        div.appendChild(createP("ISBN", llibre.isbn));
                        div.appendChild(
                            createP("DIPÒSIT LEGAL", llibre.deplegal)
                        );
                        llibreria.appendChild(div);
                    });
                } else {
                    const div = document.createElement("div");
                    div.className = "divLlibre";
                    const titol = document.createElement("h3");
                    titol.appendChild(
                        document.createTextNode(
                            "NO HI HA LLIBRES PER AQUESTA LLENGUA"
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

    fetch(servidor + "/llengues")
        .then((resultat) => {
            if (!resultat.ok) {
                throw new Error(
                    resultat.status +
                        " ERROR EN LA RECUPERACIÓ " +
                        resultat.statusText
                );
            }
            return resultat.json();
        })
        .then((resultat) => {
            //SI TOT HA ANAT BE, DINS RESULTAT TENIM LES DADES
            const select = document.getElementById("sLlengues");
            resultat.forEach((llengua) => {
                const option = document.createElement("option");
                option.appendChild(document.createTextNode(llengua.llengua));
                select.appendChild(option);
            });
        })
        .catch((error) => {
            console.log(error);
            const div = document.getElementById("llibreria");
            div.appendChild(document.createTextNode(error));
        });

    document
        .getElementById("sLlengues")
        .addEventListener("change", carregaLlibresLlengua);
};
