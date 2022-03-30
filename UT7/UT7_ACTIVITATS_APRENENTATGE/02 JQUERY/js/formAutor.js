$(function () {
    // ALIMENTAM SELECT AMB NACIONALITATS
    $.get("http://52.178.39.51:8080/nacionalitats", function (resultat) {
        // console.log(resultat);
        resultat.forEach((nacionalitat) => {
            $("#nacionalitat").append(
                '<option value="' +
                    nacionalitat.nacionalitat +
                    '">' +
                    nacionalitat.nacionalitat +
                    "</option>"
            );
        });
    });

    // TRAMITAM ENVIAMENT FORMULARI
    $("#formAutor").submit((e) => {
        // ATURAM L'ENVIAMENT
        e.preventDefault();
        // CAPTURAM DADES DEL FORMULARI
        let autor = {};
        autor.idAut = null;
        autor.nomAut = $("#nomAut").val();
        autor.dnaixAut = $("#dnaixAut").val();
        autor.fkNacionalitat = { nacionalitat: $("#nacionalitat").val() };
        console.log(autor);
        //ENVIAM DADES
        $.ajax({
            url: "http://52.178.39.51:8080/autors",
            type: "POST",
            contentType: "application/json",
            accepts: { json: "application/json" },
            dataType: "json",
            data: JSON.stringify(autor),
        })
            .done(function () {
                alert("AUTOR AFEGIT CORRECTAMENT");
                document.location = "index.hml";
            })
            .fail(function (jqXHR, error, status) {
                console.log("error");

                alert(error + "\n" + status + "\n" + jqXHR.status);
            });
    });
});
