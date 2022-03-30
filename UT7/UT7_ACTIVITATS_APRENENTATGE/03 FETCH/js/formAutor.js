window.onload = function () {
    const servidor = "http://52.178.39.51:8080/";
    fetch(servidor + "nacionalitats")
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
            const select = document.getElementById("nacionalitat");
            resultat.forEach((nacionalitat) => {
                const option = document.createElement("option");
                option.appendChild(
                    document.createTextNode(nacionalitat.nacionalitat)
                );
                select.appendChild(option);
            });
        })
        .catch((error) => {
            const formulari = document.getElementById("formAutor");
            const h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode(error));
            formulari.appendChild(option);
        });

    document.getElementById("formAutor").addEventListener("submit", (e) => {
        e.preventDefault();
        let autor = {};
        autor.idAut = null;
        autor.nomAut = document.getElementById("nomAut").value;
        autor.dnaixAut = document.getElementById("dnaixAut").value;
        autor.fkNacionalitat = {
            nacionalitat: document.getElementById("nacionalitat").value,
        };
        console.log(JSON.stringify(autor));
        fetch(servidor + "autors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(autor),
        })
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
                const missatge =
                    "INSERCIÓ CORRECTA: \n ID ASSIGNADA: " + resultat.idAut;
                alert(missatge);
                document.location = "index.html";
            })
            .catch((error) => {
                alert(error);
            });
    });
};
