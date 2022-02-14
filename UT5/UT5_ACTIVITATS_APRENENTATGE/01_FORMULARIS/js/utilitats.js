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

/** Calcula els dies que té un mes d'un any concret, tenint en compte els anys de traspàs.
 *
 * @param  mes El mes, d'1 a 12
 * @param any L'any complet
 * @returns Els dies que té el mes demanat.
 */

function validaDiaDelMes(mes, any) {
  let dia = -1;
  mes = parseInt(mes);
  any = parseInt(any);

  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: {
      dia = 31;
      break;
    }

    case 4:
    case 6:
    case 9:
    case 11: {
      dia = 30;
      break;
    }

    case 2: {
      if (any % 4 === 0 && (any % 100 !== 0 || any % 400 === 0)) {
        dia = 29;
      } else {
        dia = 28;
      }

      break;
    }
  }
  return dia;
}

/**
 * Valida que la cadena de text que rep com a paràmetre contengui una data, amb els camps separats per /

 * @param data La cadena de text amb la data
 * @returns {Boolean} true si és una data correcte, false si no.
 *  */

function validaData(data) {
  // Dividim data en parts
  let parts = data.split("/");
  // parts ha de tenir 3 elements
  if (parts.length !== 3) {
    return false;
  }

  // Totes les parts han de ser numeros sencers
  if (
    !validaSencer(parts[0]) ||
    !validaSencer(parts[1]) ||
    !validaSencer(parts[2])
  ) {
    return false;
  }

  //Mes correcte
  if (parts[1] < 1 || parts[1] > 12) {
    return false;
  }

  //Any correcte
  if (parts[2] < 1) {
    return false;
  }

  //Dia correcte
  if (parts[0] < 1 || parts[0] > validaDiaDelMes(parts[1], parts[2])) {
    return false;
  }

  return true;
}

/** Comprova que el paràmetre telefon contengui un telèfon espanyol vàlid.
 * Si especificam el segon  paràmetre podem afinar la validació a un mòbil o fixe.
 *
 * @param telefon El nombre de telefon a validar.
 * @param tipus 0 => mòbil 1 => fixe undefined => qualsevol
 * @returns true si el telèfon és correcte.
 */
function validaTelefon(telefon, tipus) {
  if (validaObligatori(telefon) && !isNaN(telefon)) {
    telefon = telefon + "";
    if (validaSencer(telefon) && telefon.length === 9) {
      if (
        (telefon.charAt(0) === "6" || telefon.charAt(0) === "7") &&
        (typeof tipus === "undefined" || tipus === 0)
      ) {
        return true;
      }
      if (
        (telefon.charAt(0) === "8" || telefon.charAt(0) === "9") &&
        (typeof tipus === "undefined" || tipus === 1)
      ) {
        return true;
      }
    }
  }
  return false;
}
