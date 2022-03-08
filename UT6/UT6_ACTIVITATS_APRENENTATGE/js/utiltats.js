function validarObligatori(valor) {
  if (valor !== null && typeof valor !== "undefined") {
    valor += "";
    valor = valor.trim();
    if (valor.length > 0) {
      return true;
    }
  }
  return false;
}

function validarSencer(numero) {
  if (validarObligatori(numero) && !isNaN(numero)) {
    if (numero % 1 === 0) {
      return true;
    }
  }
  return false;
}

function validarTelefon(telefon, tipus) {
  if (validarObligatori(telefon) && !isNaN(telefon)) {
    telefon = telefon + "";
    if (telefon.indexOf(".") < 0 && telefon.length === 9) {
      if (
        (telefon.charAt(0) === "6" || telefon.charAt(0) === "7") &&
        tipus === 0
      ) {
        return true;
      }
      if (
        (telefon.charAt(0) === "8" || telefon.charAt(0) === "9") &&
        tipus === 1
      ) {
        return true;
      }
    }
  }
  return false;
}

function diesMes(mes, any) {
  var dies = -1;
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
      dies = 31;
      break;
    }

    case 4:
    case 6:
    case 9:
    case 11: {
      dies = 30;
      break;
    }
    case 2: {
      if (any % 4 === 0 && (any % 100 !== 0 || any % 400 === 0)) {
        dies = 29;
      } else {
        dies = 28;
      }
      break;
    }
  }
  return dies;
}

function validarData(data) {
  if (!validarObligatori(data)) {
    return false;
  }
  var parts = data.split("/");
  // Ha de tenir tres parts
  if (parts.length !== 3) {
    return false;
  }
  // Totes han de ser sencers
  if (
    !validarSencer(parts[0]) ||
    !validarSencer(parts[1]) ||
    !validarSencer(parts[2])
  ) {
    return false;
  }
  // Mes correcte
  if (parts[1] < 1 || parts[1] > 12) {
    return false;
  }
  // Any correcte
  if (parts[2] < 1) {
    return false;
  }
  // Dia correcte
  if (parts[0] < 1 || parts[0] > diesMes(parts[1], parts[2])) {
    return false;
  }
  return true;
}
