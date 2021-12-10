// BOOTSTRAP ALERT SUCCESS
const idash3 = '<div class="alert alert-success" role="alert"><h3>';
const fdash3 = '</h3></div>';

// BOOTSTRAP ALERT DANGER
const idadh3 = '<div class="alert alert-danger" role="alert"><h3>';
const fdadh3 = '</h3></div>';

// BOOTSTRAP ALERT PRIMARY
const idaph3 = '<div class="alert alert-primary" role="alert"><h3>';
const fdaph3 = '</h3></div>';

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

/** Demana a l'usuari un nombre sencer. Mostra el missatge a l'alert per informar
 * a l'usuari de quina dada li demanam. No accepta cap dada que no sigui un sencer.
 *
 * @param  cadena El prompt de l'alert.
 * @returns un valor sencer
 */

 function llegeixSencer(missatge) {
	let numero;
	do {
		numero=prompt(missatge);
	} while (!validaSencer(numero));
	return parseInt(numero);
}

/** Mostra de forma recursiva els caracters que formen una cadena
 *
 * @param cadena La cadena de la qual volem mostrar els carcters
 * @returns els caracters que formen la cadena separats per guions
 */

function mostraXifres(cadena) {
	if (cadena.length == 1) {
		return cadena;
	}
	return (
		cadena.charAt(0) + ' - ' + mostraXifres(cadena.slice(1 - cadena.length))
	);
}

/** Mostra de forma recursiva els caracters que formen una cadena
 *
 * @param cadena La cadena de la qual volem mostrar els carcters
 * @param invers Si es true, tracta la cadena en sentit invers
 *               Si es false, tracta la cadena en sentit natural
 * @returns els caracters que formen la cadena separats per guions
 */

function mostraXifresSentit(cadena, invers) {
	if (cadena.length == 1) {
		return cadena;
	}
	if (invers == false) {
		return (
			cadena.charAt(0) +
			' - ' +
			mostraXifresSentit(cadena.slice(1 - cadena.length), invers)
		);
	} else {
		return (
			cadena.charAt(cadena.length - 1) +
			' - ' +
			mostraXifresSentit(cadena.slice(0, cadena.length - 1), invers)
		);
	}
}




//** FUNCIO SUMA */

function suma(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number'){
		return null;
	}
	return num1 + num2;
	
}

//** FUNCIO RESTA */

function resta(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number'){
		return null;
	}
	return num1 - num2;
	
}

function sumaRest(...sumands){

    // Versió 1
    let resultat=0;
    for(let i=0; i<sumands.length; i++){
		//console.log(sumands[i]);
        resultat = resultat + parseInt(sumands[i]);
    }
    return resultat;

    // Versió 2
    // let resultat=0;
    // for(let index in sumands){
    //     resultat+=sumands[index];
    // }
    // return resultat;

    // Versió 3
    // let resultat=0;
    // for(let valor of sumands){
    //     resultat+=valor;
    // }
    // return resultat;

    // Versió 4
    //return sumands.reduce((a,b)=>a+b);
}