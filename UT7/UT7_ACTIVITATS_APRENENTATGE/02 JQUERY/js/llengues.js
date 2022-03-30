$(function () {
    $.get("http://52.178.39.51:8080/llengues", function (resultat) {
        resultat.forEach((element) => {
            console.log(element);
            $("#llista").append("<li>" + element.llengua + "</li>");
        });
    });
});
