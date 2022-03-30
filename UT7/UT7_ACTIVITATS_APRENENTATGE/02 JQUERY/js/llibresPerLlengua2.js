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
            accepts: { json: "application/json" },
            dataType: "json",
        }).done(function (data, codi, jqXHR) {
            console.log(data);
            for (const llibre of data) {
                $("#llibreria").append(
                    '<div class="divLlibre"><h3>' +
                        llibre.titol +
                        "</h3>" +
                        '<p><span class="label">EDITORIAL: </span>' +
                        llibre.fkIdedit.idEdit +
                        "</p>" +
                        '<p><span class="label">ISBN: </span>' +
                        llibre.isbn +
                        "</p>" +
                        '<p><span class="label">DEPÒSIT LEGAL: </span>' +
                        llibre.deplegal +
                        "</p>" +
                        "</div>"
                );
            }
        });
    });
});
