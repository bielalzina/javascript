window.onload = function () {
    // CAPTURAM POSSIBLE IDENTIFICADOR INCLOS EN EL PATH
    const identificador = window.location.search;
    const params = new URLSearchParams(identificador);
    const id = params.get("idEdit");
    if (existeixIdentificador(identificador)) {
        if (verificaParametres(params)) {
            // SI L'IDENTIFICADOR ÉS VÀLID, CRIDAM LA FUNCIÓ
            // QUE ENS RETORNA ELS VALORS DE L'EDITOR A MODIFICAR
            retornaEditor(id, "edicio");
        } else {
            // L'IDENTIFICADOR NO ÉS VÀLID
            alert(missatgeErrorModificacio1);
            document.location = "index.html";
        }
    }

    // CAPTURAM FORM I ASSIGNAM LISTENER
    const formulari = document.getElementById("formEditor");
    formulari.addEventListener("submit", (e) => {
        e.preventDefault();
        // CAPTURAM LES DADES INTRODUÏDES EN FORMULARI
        let dadesEditor = capturaDadesFormulari();
        if (existeixIdentificador(identificador)) {
            // CAS MODIFICACIÓ => EXECUTAM PETICIÓ PUT
            modificaEditor(dadesEditor);
        } else {
            // CAS ALTA => EXECUTAM PETICIO POST
            // ASSIGNAM -1 A idEdit D'ACORD AMB DOCUMENT PUBLICAT
            dadesEditor.idEdit = -1;
            afegeixEditor(dadesEditor);
        }
    });
};
