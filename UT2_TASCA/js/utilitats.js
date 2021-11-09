const idash3 = '<div class="alert alert-success" role="alert"><h3>';
const fdash3 = '</h3></div>';

const idadh3 = '<div class="alert alert-danger" role="alert"><h3>';
const fdadh3 = '</h3></div>';

/**
 * Comprova que un camp obligatori contengui informació. Realitza tres comprovacions:
 * <ol>
 * <li> El valor no pot ser null</li>
 * <li> El valor no pot ser undefined</li>
 * <li> El valor no pot contenir únicament espais en blanc.</li>
 *
 * </ol>

 * @param {type} valor El valor que comprovam
 * @returns {Boolean} true si conte dades, false en cas contrari*/

function validaObligatori(valor) {
	if ((valor !== null) & (valor !== 'undefined')) {
		// Convertim valor a cadena i eliminam espais en blanc al principi i al final
		// Evitam que un usuari només introdueixi espais
		valor = valor.toString().trim();
		if (valor.length > 0) {
			return true;
		}
	}
	return false;
}

/**Comprova que el paràmetre sigui numèric i de tipus "sencer".
 * Comprova que contengui dades, que siguin numèriques i que el reste de la
 * divisió sencera amb 1 sigui 0.
 *
 * @param  numero La dada a comprovar.
 * @returns true si és un valor sencer
 */

function validaSencer(numero) {
	if (!isNaN(numero) && numero % 1 === 0) {
		return true;
	} else {
		return false;
	}
}

/**Comprova que el paràmetre sigui numèric i de tipus "real".
 * Comprova que contengui dades, que siguin numèriques i que el reste de la
 * divisió sencera amb 1 no sigui 0.
 *
 * @param  numero La dada a comprolet.
 * @returns true si és un valor decimal
 */

function validaDecimal(numero) {
	if (!isNaN(numero) && numero % 1 !== 0) {
		return true;
	} else {
		return false;
	}
}

/** Demana a l'usuari un nombre sencer. Mostra el missatge a l'alert per informar
 * a l'usuari de quina dada li demanam. No accepta cap dada que no sigui un sencer.
 *
 * @param  cadena El prompt de l'alert.
 * @returns un valor sencer
 */

function llegeixSencer(missatge) {
	let numero;
	do {
		numero = prompt(missatge);
	} while (!validaSencer(numero));
	return parseInt(numero);
}
