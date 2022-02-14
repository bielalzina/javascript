// RETORNA EL VALOR MAXIM D'UN ARRAY

function maxim(vector) {
  var max = vector[0];
  console.log("LENGTH: " + vector.length);
  for (var i = 0; i < vector.length; i++) {
    console.log(i + " => " + vector[i]);
    if (vector[i] > max) {
      max = vector[i];
      console.log("MAX: " + max);
    }
  }
  return max;
}

// RETORNA EL VALOR MINIM D'UN ARRAY

function minim(vector) {
  var min = vector[0];
  for (var i = 0; i < vector.length; i++) {
    console.log(i + " => " + vector[i]);
    if (vector[i] < min) {
      min = vector[i];
      console.log("MIN: " + min);
    }
  }
  return min;
}

function mitjana(vector) {
  var total = vector.reduce((acumulat, elementActual) => {
    return acumulat + elementActual;
  });
  return total / vector.length;
}

// FA UNA COPIA EXACTA D'UN ARRAY 1

function copiaArray(original) {
  let copia = [];
  for (let i = 0; i < original.length; i++) {
    copia.push(original[i]);
  }
  return copia;

  // UNA  ALTRA FORMA
  // return Array.from(original);
}

// RETORNA EL VALOR MÉS REPETIT D'UN ARRAY

function moda(vector) {
  valors = [];
  aparicions = [];

  for (let i = 0; i < vector.length; i++) {
    if (valors.indexOf(vector[i]) >= 0) {
      aparicions[valors.indexOf(vector[i])]++;
    } else {
      valors.push(vector[i]);
      aparicions.push(1);
    }
  }

  //console.log(vector);
  //console.log(valors);
  //console.log(aparicions);

  function posicioModa() {
    var valorMesRepetit = aparicions[0];
    var posicioValorMesRepetit = 0;
    for (let i = 1; i < aparicions.length; i++) {
      if (aparicions[i] > valorMesRepetit) {
        valorMesRepetit = aparicions[i];
        posicioValorMesRepetit = i;
      }
    }
    return posicioValorMesRepetit;
  }

  return vector[posicioModa()];
}

// MODIFICA UN STRING A camelCase

function camelCase(oracio) {
  oracio = oracio.toLowerCase();
  //console.log(oracio);

  const paraules = oracio.split(" ");
  //console.log(paraules);

  for (let i = 1; i < paraules.length; i++) {
    paraules[i] = paraules[i].charAt(0).toUpperCase() + paraules[i].substr(1);
  }
  //console.log(paraules);

  return paraules.join("");
}

// ELIMINA DUPLICATS D'UN ARRAY

function eliminaDuplicats(vector) {
  //Convertim array amb un set el qual no admet elements REPETITS
  let nouVector = new Set(vector);
  //console.log(nouVector);

  // Convertim el set a ARRAY
  nouVector = Array.from(nouVector);
  //console.log(nouVector);

  // Ordenam array numericament
  nouVector.sort(function (a, b) {
    return a - b;
  });
  return nouVector;
}
