$(function () {
    // CAPTURAM POSSIBLE IDENTIFICADOR INCLOS EN EL PATH
    const identificador = window.location.search;
    // NETEJA DE POSSIBLES DADES ANTERIORS
    $("#mostrador").empty();

    if (existeixIdentificador(identificador)) {
        const params = new URLSearchParams(identificador);
        if (verificaParametres(params)) {
            // IDENTIFICADOR ÉS VÀLID
            // FEIM VISIBLE BOTO PER ELIMINAR
            $("#bElimina").removeClass("invisible");
            // CRIDAM LA FUNCIÓ QUE RETORNA ELS VALORS DE L'EDITOR A ELIMINAR
            const id = params.get("idEdit");
            retornaEditor(id, "eliminacio");
            // AFEGIM LISTENER A BOTO I FUNCIONALITAT PER DUR A TERME
            // L'ELIMINACIÓ DE L'EDITOR
            $("#bElimina").click(function () {
                eliminaEditor(id);
            });
        } else {
            // IDENTIFICADOR ÉS VÀLID
            $("#mostrador").append(missatgeErrorEliminacio2);
        }
    } else {
        // NO HI HA IDENTIFICADOR
        $("#mostrador").append(missatgeErrorEliminacio1);
    }
});
