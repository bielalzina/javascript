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
});
