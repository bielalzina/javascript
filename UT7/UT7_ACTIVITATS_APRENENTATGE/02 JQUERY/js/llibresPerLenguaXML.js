$(function () {
    //const ip = "52.178.39.51:8080";
    $.get("http://52.178.39.51:8080/llengues", function (resultat) {
        for (const item of resultat) {
            console.log(item);
            $("#sLlengues").append(
                '<option value="' +
                    item.llengua +
                    '">' +
                    item.llengua +
                    "</option>"
            );
        }
    });
    $("#sLlengues").change(function () {
        $("#llibreria").empty();
        $.ajax({
            url: "http://52.178.39.51:8080/llibres/perLlengua/" + this.value,
            type: "GET",
            accepts: { json: "application.xml" },
            dataType: "xml",
        }).done(function (xml, codi, jqXHR) {
            $(xml)
                .find("item")
                .each(function () {
                    $("#llibreria").append(
                        '<div class="divLlibre">' +
                            // TITOL LLIBRE
                            "<h3>" +
                            $(this).find("titol").text() +
                            "</h3>" +
                            // EDITORIAL
                            '<p><span class="label">EDITORIAL: </span>' +
                            $(this).find("fkIdedit").find("nomEdit").text() +
                            "</p>" +
                            // ISBN
                            '<p><span class="label">ISBN: </span>' +
                            $(this).find("isbn").text() +
                            "</p>" +
                            // DIPÒSIT LEGAL
                            '<p><span class="label">DIPÒSIT LEGAL: </span>' +
                            $(this).find("deplegal").text() +
                            "</p>" +
                            "</div>"
                    );
                });
        });
    });
});
