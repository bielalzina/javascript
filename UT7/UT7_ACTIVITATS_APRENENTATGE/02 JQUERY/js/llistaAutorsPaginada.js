$(function () {
    let paginaActual = 0;
    //ELIMINAM LLISTA EXISTENT
    function neteja(element) {
        while (element.lastChild) {
            element.removeChild(element.lastChild);
        }
    }

    function carregaAutors() {
        $.ajax({
            url: "http://52.178.39.51:8080/autors/" + paginaActual + "/" + 100,
            type: "GET",
            accepts: { json: "application/json" },
            dataType: "json",
        }).done(function (resultat) {
            $("#llista").empty();
            $(resultat).each(function () {
                $("#llista").append("<li>" + this.nomAut + "</li>");
            });

            $("#links").empty();
            if (paginaActual > 0) {
                $("#links").append(
                    '<button type="button" id="bAnterior">ANTERIOR</button>'
                );
                $("#bAnterior").click(function () {
                    paginaActual--;
                    carregaAutors();
                });
            } else {
                $("#links").append(
                    '<button type="button" id="bAnterior" disabled>ANTERIOR</button>'
                );
            }
            $("#links").append(" <- " + paginaActual + " -> ");
            if (resultat.length == 100) {
                $("#links").append(
                    '<button type="button" id="bSeguent">SEGÜENT</button>'
                );
                $("#bSeguent").click(function () {
                    paginaActual++;
                    carregaAutors();
                });
            } else {
                $("#links").append(
                    '<button type="button" id="bSeguent" disabled>SEGÜENT</button>'
                );
            }
        });
    }
    carregaAutors();
});
