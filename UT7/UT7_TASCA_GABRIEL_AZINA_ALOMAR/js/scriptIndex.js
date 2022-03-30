$(function () {
    let servidor = "http://52.178.39.51:8080/editors/partNom/";

    $("#editorACercar").keyup(function (e) {
        e.preventDefault();
        $("#llistaEditors").empty();
        $.get(servidor + $("#editorACercar").val(), function (resultat) {
            resultat.forEach((editor) => {
                //console.log(editor);

                $("#llistaEditors").append(
                    "<li>" +
                        '<a href="formulariEditor.html?idEdit=' +
                        editor.idEdit +
                        '">' +
                        '<button type="button" class="btn btn-primary">' +
                        "MODIFICA</button></a>&nbsp;&nbsp;" +
                        '<a href="esborraEditor.html?idEdit=' +
                        editor.idEdit +
                        '">' +
                        '<button type="button" class="btn btn-danger">' +
                        "ELIMINA</button></a>&nbsp;&nbsp;" +
                        editor.nomEdit +
                        "&nbsp;(" +
                        editor.idEdit +
                        ")" +
                        "</li>"
                );
            });
        });
    });
});
