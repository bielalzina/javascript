
function suma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }
    return (num1 + num2);
}

function resta(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }
    return (num1 - num2);
}

function producte(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }
    return (num1 * num2);
}

function divisio(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return null;
    }
    return (num1 / num2);
}

function potencia(base, expo) {
    if (typeof base !== 'number' || typeof expo !== 'number') {
        return null;
    }
    return Math.pow(base,expo);
}

/**Comprova que el paràmetre sigui numèric i de tipus "sencer".
 * Comprova que contengui dades, que siguin numèriques i que el reste de la
 * divisió sencera amb 1 sigui 0.
 *
 * @param  numero La dada a comprovar.
 * @returns true si és un valor sencer
 */

function validaSencer(numero) {
    if (!isNaN(numero) && (numero % 1 === 0)) {
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
    if (!isNaN(numero) && (numero % 1 !== 0)) {
        return true
    } else {
        return false;
    }
}
