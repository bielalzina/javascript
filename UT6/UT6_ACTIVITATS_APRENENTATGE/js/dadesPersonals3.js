window.onload = function () {
  document.getElementById("formulari").onsubmit = validar;
  document.getElementById("formulari").onreset = function () {
    return confirm("ESTAS SEGUR QUE VOLS NETEJAR EL FORMULARI?");
  };
  document.getElementById("illa").onchange = canviarLocalitats;
  document.getElementById("nom").value = "JO";
  document.getElementById("llinatges").value = "LLINATGES";
  document.getElementById("nom").focus();
};

function validar() {
  var cadena = "ERRADES EN FORMULARI:\n";
  var resultat = true;
  var objecte;

  function errada(error, string) {
    if (error) {
      resultat = false;
      cadena = cadena + string;
      objecte.style.backgroundColor = "#f00";
    } else {
      objecte.style.backgroundColor = "#fff";
    }
  }

  // DADES BÀSIQUES
  // NOM
  objecte = document.getElementById("nom");
  if (!validarObligatori(objecte.value)) {
    errada(true, "- EL CAMP NOM NO POT ESTAR BUIT\n");
  } else {
    errada(false);
  }

  // LLINATGES
  objecte = document.getElementById("llinatges");
  if (!validarObligatori(objecte.value)) {
    errada(true, "- EL CAMP LLINATGES NO POT ESTAR BUIT\n");
  } else {
    errada(false);
  }

  //TELEFON 1
  objecte = document.getElementById("tel1");
  if (!validarTelefon(objecte.value, 0) && !validarTelefon(objecte.value, 1)) {
    errada(
      true,
      "- EL CAMP TELEFON 1 HA DE CONTENIR UN NUM. DE TELEFON VÀLID\n"
    );
  } else {
    errada(false);
  }

  //ALTRES DADES

  // TELEFON 2

  objecte = document.getElementById("tel2");
  if (validarObligatori(objecte.value)) {
    //Si hi ha informació
    if (
      !validarTelefon(objecte.value, 0) &&
      !validarTelefon(objecte.value, 1)
    ) {
      errada(
        true,
        "- EL CAMP TELEFON 2 HA DE CONTENIR UN NUM. DE TELEFON VÀLID\n"
      );
    } else {
      errada(false);
    }
  } else {
    errada(false);
  }

  // DATA DE NEIXEMENT

  objecte = document.getElementById("dataNeixement");
  if (validarObligatori(objecte.value)) {
    //Si hi ha informació
    if (!validarData(objecte.value)) {
      errada(
        true,
        "- EL CAMP DATA DE NEIXEMENT HA DE CONTENIR UNA DATA VÀLIDA\n"
      );
    } else {
      errada(false);
    }
  } else {
    errada(false);
  }

  if (resultat) {
    cadena = "FORMULARI EMPLENAT CORRECTAMENT";
  }

  alert(cadena);
  return resultat;
}

function canviarLocalitats() {
  var illaValue = parseInt(document.getElementById("illa").value);
  var poblacions;
  switch (illaValue) {
    case 1: {
      poblacions =
        '<option value="Arta">Artà</option><option value="Andratx">Andratx</option>';
      break;
    }
    case 2: {
      poblacions =
        '<option value="Ciutadella">Ciutadella</option><option value="Mao">Maó</option>';
      break;
    }
    case 3: {
      poblacions =
        '<option value="Josep">Sant Josep</option><option value="Joan">Sant Joan</option>';
      break;
    }
    case 4: {
      poblacions =
        '<option value="Josep">Sant Francesc</option><option value="Calo">Es Caló</option>';
      break;
    }
  }
  document.getElementById("pobles").innerHTML = poblacions;
}
