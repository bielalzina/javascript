window.onload = function () {
    const ip = "52.178.39.51";
    function carregaLlengues(e) {
        const url = "http://" + ip + ":8080/llengues";
        const req = new XMLHttpRequest();
        req.addEventListener("readystatechange", function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    const resultat = JSON.parse(req.responseText);
                    const select = document.getElementById("sLlengues");
                    for (const llengua of resultat) {
                        const option = document.createElement("option");
                        option.appendChild(
                            document.createTextNode(llengua.llengua)
                        );
                        select.appendChild(option);
                    }
                } else {
                    const missatge = JSON.parse(req.responseText);
                    llibres.append(document.createTextNode(missatge.error));
                }
            }
        });

        req.open("GET", url);
        req.setRequestHeader("Accept", "application/json");
        req.send();
    }

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
        const url = "http://" + ip + ":8080/llibres/perLlengua/";
        const req = new XMLHttpRequest();
        req.addEventListener("readystatechange", function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    console.log(req.responseText);
                    console.log(req.responseXML);
                    const resultat = req.responseXML;
                    console.log(resultat);
                    for (const llibre of resultat.getElementsByTagName(
                        "item"
                    )) {
                        console.log(llibre);
                        const div = document.createElement("div");
                        div.className = "divLlibre";
                        const titol = document.createElement("h3");
                        titol.appendChild(
                            document.createTextNode(
                                extreureDades(llibre, "titol")
                            )
                        );
                        div.appendChild(titol);
                        div.appendChild(
                            createP(
                                "Editorial",
                                extreureDades(
                                    llibre.getElementsByTagName("fkIdedit")[0],
                                    "nomEdit"
                                )
                            )
                        );
                        div.appendChild(
                            createP("ISBN", extreureDades(llibre, "isbn"))
                        );
                        div.appendChild(
                            createP(
                                "Depòsit legal",
                                extreureDades(llibre, "deplegal")
                            )
                        );
                        llibreria.appendChild(div);
                    }
                } else {
                    const missatge = JSON.parse(req.responseText);
                    llibreria.append(document.createTextNode(missatge.error));
                }
            }
        });

        req.open("GET", url + llengua);
        req.setRequestHeader("Accept", "application/xml");
        req.send();
    }

    carregaLlengues();
    document
        .getElementById("sLlengues")
        .addEventListener("change", carregaLlibresLlengua);
};
