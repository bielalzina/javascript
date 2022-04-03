$(function () {
    // AFEGIM LISTENER A L'INPUT
    $("#editorACercar").keyup(function (e) {
        e.preventDefault();
        // NETEJA DE POSSIBLES DADES ANTERIORS
        $("#llistaEditors").empty();
        // CAPTURAM CADENA A CERCAR
        let textRecerca = $("#editorACercar").val();
        // CRIDAM LA FUNCIÓ QUE ENS TORNA ELS EDITORS QUE COMPLEIX EL CRITERI
        // DE RECERCA
        cercaNomsEditors(textRecerca);
    });
    // CARREGAM FORMULARI PER PROCEDIR A L'ALATA DE L'EDITOR
    $("#bAfegir").click(function () {
        window.location.href = "formulariEditor.html";
    });
});
