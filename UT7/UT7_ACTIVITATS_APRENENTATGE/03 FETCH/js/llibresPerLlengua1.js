window.onload = function () {
    const servidor = "http://52.178.39.51:8080";

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
};
