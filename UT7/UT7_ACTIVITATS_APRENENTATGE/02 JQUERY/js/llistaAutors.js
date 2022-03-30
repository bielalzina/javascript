$(function () {
    $.ajax({
        url: "http://52.178.39.51:8080/autors/",
        type: "GET",
        accepts: { json: "application/json" },
        dataType: "json",
    }).done(function (resultat) {
        console.log(resultat);
        $("#llista").empty();
        $(resultat).each(function () {
            $("#llista").append("<li>" + this.nomAut + "</li>");
        });
    });
});
