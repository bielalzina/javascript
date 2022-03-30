window.onload = function () {
    function neteja(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }

    function carregaAutors() {
        const url = "http://52.178.39.51:8080/autors";
        const req = new XMLHttpRequest();
        const llista = document.getElementById("llista");
        req.addEventListener("readystatechange", function () {
            if (req.readyState == 4) {
                if (req.status == 200) {
                    neteja(llista);
                    const resultat = JSON.parse(req.responseText);
                    for (const autor of resultat) {
                        const li = document.createElement("li");
                        li.appendChild(document.createTextNode(autor.nomAut));
                        llista.appendChild(li);
                    }
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
