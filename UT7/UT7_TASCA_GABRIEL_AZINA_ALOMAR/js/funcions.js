// VARIABLES
const servidor = "http://52.178.39.51:8080/";

// MISSATGE D'ERROR QUE ES MOSTRA SI S'ACCEDEIX A formulariEditor.html
// AMB PARAMETRES INCORRECTES QUE IDENTIFIQUEN L'EDITOR QUE ES VOL MODIFICAR
const missatgeErrorModificacio1 =
    "ELS VALORS DELS PARAMETRES NECESSARIS PER MODIFICAR " +
    "UN EDITOR NO SON CORRECTES. TORNA A L'INDEX, " +
    "CERCA L'EDITOR QUE VOLS MODIFICAR I CLICA " +
    "EN EL BOTO MODIFICA CORRESPONENT";

// MISSATGE D'ERROR QUE ES MOSTRA SI S'ACCEDEIX A esborraEditor.html
// SENSE EL PARAMETRES QUE IDENTIFIQUEN L'EDITOR
const missatgeErrorEliminacio1 =
    '<div class="alert alert-danger" role="alert"><h2>' +
    "SI VOLS ELIMINAR UN EDITOR, TORNA A L'INDEX, " +
    "CERCA L'EDITOR QUE VOLS ELIMINAR I CLICA " +
    "EN EL BOTO ELIMINA CORRESPONENT" +
    "</h2></div>";

// MISSATGE D'ERROR QUE ES MOSTRA SI S'ACCEDEIX A esborraEditor.html
// AMB PARAMETRES QUE IDENTIFIQUEN L'EDITOR QUE NO SON CORRECTES
const missatgeErrorEliminacio2 =
    '<div class="alert alert-danger" role="alert"><h2>' +
    "ELS VALORS DELS PARAMETRES NECESSARIS PER ELIMINAR " +
    "UN EDITOR NO SON CORRECTES. TORNA A L'INDEX, " +
    "CERCA L'EDITOR QUE VOLS ELIMINAR I CLICA " +
    "EN EL BOTO ELIMINA CORRESPONENT" +
    "</h2></div>";

/**
 * Funció que retorna el nom i l'ID de l'editor o dels editors que compleixen
 * amb el criteri de recerca indicat per l'usuari
 *
 * @param  {cadena} cadena a cercar en el nom de l'editor
 * @returns torna l'id i el nom dels editors que compleixen amb el criteri,
 *          executant la funció mostraNomsEditors() que s'encarrega de
 *          pintar aquestes dades en l'html
 */
function cercaNomsEditors(cadena) {
    const url = servidor + "editors/partNom/" + cadena;
    $.get(url, function (resultat) {
        resultat.forEach((editor) => {
            //console.log(editor);
            mostraNomsEditors(editor);
        });
    });
}

/**
 * Funció que pinta l'id i el nom dels editors que compleixen el
 * criteri de recerca. També incorpora els botons per MODIFICAR o ELIMINAR
 * l'editor corresponent
 *
 * @param  {editor} dades de l'editor
 * @returns codi HTML amb ID, el nom i els botons per modificar i eliminar
 */
function mostraNomsEditors(editor) {
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
}

/**
 * Funció que verifica que la URL inclou algun identificador
 * @param {identificador} el valor que verifica
 * @returns {Boolean} true si conte dades, false en cas contrari
 */
function existeixIdentificador(identificador) {
    if (identificador != "") {
        return true;
    }

    return false;
}

/**
 * Funció que recopila els valors del formulari d'alta o edició de l'editor
 *
 * @param
 * @returns variable amb els valors
 */
function capturaDadesFormulari() {
    let editor = {};
    editor.idEdit = document.getElementById("idEdit").value;
    editor.nomEdit = document.getElementById("nomEdit").value;
    editor.adrEdit = document.getElementById("adrEdit").value;
    editor.cpEdit = document.getElementById("cpEdit").value;
    editor.pobEdit = document.getElementById("pobEdit").value;
    editor.telEdit = null;
    editor.faxEdit = null;
    editor.emailEdit = null;
    return editor;
}

/**
 * Funció que realitza una petició POST per afegir un editor en el servidor
 *
 * @param {dadesEditor} dades de l'editor que es vol donar d'alta
 * @returns alert amb la resposta del servidor relativa a l'execució de la
 *          petició
 */

function afegeixEditor(dadesEditor) {
    const url = servidor + "editors";
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                const resultat = JSON.parse(req.responseText);
                alert(
                    "OPERACIÓ REALITZADA CORRECTAMENT\n" +
                        "S'HA ASSIGNAT EL CODI " +
                        resultat.idEdit +
                        "\nAL NOU EDITOR/A " +
                        resultat.nomEdit
                );
                document.location = "index.html";
            } else {
                const missatge = JSON.parse(req.responseText);
                alert(missatge.error);
            }
        }
    });
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("Accept", "application/json");
    req.send(JSON.stringify(dadesEditor));
}

/**
 * Funció que verifica que els parametres passats per URL
 * permeten realitzar l'operació sol·licitada
 * @param {parametres} els valors que verifica
 * @returns {Boolean} true si el parametre es correcte, false en cas contrari
 */
function verificaParametres(parametres) {
    if (parametres.has("idEdit") && validaSencer(parametres.get("idEdit"))) {
        return true;
    }
    return false;
}

/**
 * Comprova que un camp obligatori contengui informació. Realitza tres comprovacions:
 * <ol>
 * <li> El valor no pot ser null</li>
 * <li> El valor no pot ser undefined</li>
 * <li> El valor no pot contenir únicament espais en blanc.</li>
 *
 * </ol>

 * @param {type} valor El valor que comprovam
 * @returns {Boolean} true si conte dades, false en cas contrari
 * */

function validaObligatori(valor) {
    if ((valor !== null) & (valor !== "undefined")) {
        // Convertim valor a cadena i eliminam espais en blanc al principi i al final
        // Evitam que un usuari només introdueixi espais
        valor = valor.toString().trim();
        if (valor.length > 0) {
            return true;
        }
    }
    return false;
}

/**
 * Comprova que el paràmetre sigui numèric i de tipus "sencer".
 * Comprova que contengui dades, que siguin numèriques i que el reste de la
 * divisió sencera amb 1 sigui 0.
 *
 * @param  numero La dada a comprovar.
 * @returns true si és un valor sencer
 */

function validaSencer(numero) {
    if (validaObligatori(numero) && !isNaN(numero)) {
        if (numero % 1 === 0) {
            return true;
        }
    }
    return false;
}

/**
 * Funció que obte les dades d'un editor, fent servir AJAX
 *
 * @param  {id} identificador de l'editor
 * @param  {accio} en funció d'on s'han de pintar les dades de l'editor
 * <ol>
 * <li> eliminacio => pinta les dades en esborraEditor.html per posteriorment
 *      procedir a l'eliminació</li>
 * <li> edicio => pinta les dades en formulariEditor.html per poder
 *      ser editades</li>
 * </ol>
 * @returns crida a la funció carregaValorsEliminicacio() o
 *          carregaValorsEdicio() en funció del parametre acció
 */
function retornaEditor(id, accio) {
    const url = servidor + "editors/perId/" + id;
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                const resultat = JSON.parse(req.responseText);
                //console.log(resultat);
                if (accio == "eliminacio") {
                    carregaValorsEliminicacio(resultat);
                } else if (accio == "edicio") {
                    carregaValorsEdicio(resultat);
                }

                return resultat;
            } else {
                const missatge = JSON.parse(req.responseText);
                alert(missatge.error);
                window.location.href = "index.html";
            }
        }
    });
    req.open("GET", url);
    req.setRequestHeader("Accept", "application/json");
    req.send();
}

/**
 * Funció que pinta les dades de l'Editor que es vol modificar en
 * formulariEditor.html per posteriorment procedir a l'edició
 *
 * @param  {editor} dades de l'editor
 * @returns assigna valors als inputs del formulari
 */

function carregaValorsEdicio(editor) {
    document.getElementById("idEdit").value = editor.idEdit;
    document.getElementById("nomEdit").value = editor.nomEdit;
    document.getElementById("adrEdit").value = editor.adrEdit;
    document.getElementById("cpEdit").value = editor.cpEdit;
    document.getElementById("pobEdit").value = editor.pobEdit;
}

/**
 * Funció que realitza una petició PUT per modificar les dades de l'editor
 *
 * @param {dadesEditor} dades de l'editor que es vol modificar
 * @returns alert amb la resposta del servidor relativa a l'execució de la
 *          petició
 */

function modificaEditor(dadesEditor) {
    const url = servidor + "editors/" + dadesEditor.idEdit;
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                const resultat = JSON.parse(req.responseText);
                alert(
                    "OPERACIÓ REALITZADA CORRECTAMENT\n" +
                        "S'HA MODIFICAT L'EDITOR " +
                        resultat.idEdit +
                        "\nNOM: " +
                        resultat.nomEdit +
                        "\nADREÇA: " +
                        resultat.adrEdit +
                        "\nCP: " +
                        resultat.cpEdit +
                        "\nPOBLACIÓ: " +
                        resultat.pobEdit
                );
                document.location = "index.html";
            } else {
                const missatge = JSON.parse(req.responseText);
                alert(missatge.error);
            }
        }
    });
    req.open("PUT", url);
    req.setRequestHeader("Content-Type", "application/json");
    req.send(JSON.stringify(dadesEditor));
}

/**
 * Funció que pinta les dades de l'Editor en esborraEditor.html
 * per posteriorment procedir a l'eliminació
 *
 * @param  {editor} dades de l'editor
 * @returns codi HTML amb les dades de l'editor a eliminar
 */
function carregaValorsEliminicacio(editor) {
    $("#mostrador").append(
        "<p><strong>CODI: </strong>" +
            editor.idEdit +
            "</p>" +
            "<p><strong>NOM: </strong>" +
            editor.nomEdit +
            "</p>" +
            "<p><strong>ADREÇA: </strong>" +
            editor.adrEdit +
            "</p>" +
            "<p><strong>CODI POSTAL: </strong>" +
            editor.cpEdit +
            "</p>" +
            "<p><strong>POBLACIÓ: </strong>" +
            editor.pobEdit +
            "</p>"
    );
}

/**
 * Funció que realitza la petició per eliminar un editor
 * @param  {id} idEdit de l'editor que es vol eliminar
 * @returns alert amb el resultat de l'acció
 */
function eliminaEditor(id) {
    const url = servidor + "/editors/" + id;
    console.log(url);
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                alert("L'EDITOR AMB EL CODI (" + id + ") HA ESTAT ELIMINAT");
                window.location.href = "index.html";
            } else {
                const missatge = JSON.parse(req.responseText);
                alert(missatge.error);
                window.location.href = "index.html";
            }
        }
    });
    req.open("DELETE", url);

    req.send();
}
