window.onload = function () {
    const url = "http://52.178.39.51:8080/autors/";

    // CARREGAM AUTORS

    const llista = document.getElementById("llista");
    fetch(url)
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
        })
        .catch((error) => {
            alert(error);
        });
};
