window.onload = function () {
    function carregaNacionalitats() {
        const url = "http://52.178.39.51:8080/nacionalitats";
        const req = new XMLHttpRequest();
        req.addEventListener("readystatechange", function () {
            if (req.readyState == 4) {
                console.log("req.readyState: " + req.readyState);
                if (req.status == 200) {
                    console.log("req.status: " + req.status);
                    console.log(JSON.parse(req.responseText));
                    const resultat = JSON.parse(req.responseText);
                    const select = document.getElementById("nacionalitat");
                    for (const nacionalitat of resultat) {
                        const option = document.createElement("option");
                        option.appendChild(
                            document.createTextNode(nacionalitat.nacionalitat)
                        );
                        select.appendChild(option);
                    }
                } else {
                    console.log(req.responseText.error);
                    const missatge = req.responseText;
                    const div = document.getElementById("llistaNacionalitats");
                    div.appendChild(document.createTextNode(missatge.error));
                }
            }
        });
        req.open("GET", url);
        req.send();
    }

    carregaNacionalitats();

    document.getElementById("formAutor").addEventListener("submit", (e) => {
        e.preventDefault();
        let autor = {};
        autor.idAut = null;
        autor.nomAut = document.getElementById("nomAut").value;
        autor.dnaixAut = document.getElementById("dnaixAut").value;
        autor.fkNacionalitat = {
            nacionalitat: document.getElementById("nacionalitat").value,
        };
        //console.log(JSON.stringify(autor));
        const url = "http://52.178.39.51:8080/autors";
        const req = new XMLHttpRequest();
        req.addEventListener("readystatechange", function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    alert("AUTOR AFEGIT CORRECTAMENT");
                    document.location = "index.html";
                } else {
                    const missatge = req.responseText;
                    alert(missatge.error);
                }
            }
        });
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("Accept", "application/json");
        req.send(JSON.stringify(autor));
    });
};
