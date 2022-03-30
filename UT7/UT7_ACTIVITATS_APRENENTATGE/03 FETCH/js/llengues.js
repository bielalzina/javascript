window.onload = function () {
    const url = "http://52.178.39.51:8080/llengues";
    fetch(url)
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
            //SI TOT HA ANAT BE, DINS RESULTAT TENIM LES DADES
            const llista = document.getElementById("llista");
            resultat.forEach((llengua) => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(llengua.llengua));
                llista.appendChild(li);
            });
        })
        .catch((error) => {
            console.log(error);
            const llista = document.getElementById("llista");
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(error.toString()));
            llista.appendChild(li);
        });
};
