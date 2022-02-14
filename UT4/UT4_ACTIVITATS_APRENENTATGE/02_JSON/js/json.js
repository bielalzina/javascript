// objecteJavascript.html

function creaObjecteJavaScript() {
  return {
    nom: "GABRIEL",
    llinatges: "ALZINA ALOMAR",
    cicle: "GSDAW",
    moduls: 3,
  };
}

// objecteJSON.html

function tornaCadenaObjecteJSON() {
  return '{"nom": "GABRIEL","llinatges": "ALOMAR ALZINA","cicle": "GSDAW","moduls":3}';
}

// arrayObjectesJSON.html

function tornaCadenaArraysObjectesJSON() {
  return (
    "[" +
    '{"nom": "GABRIEL","llinatges": "ALOMAR ALZINA","cicle": "GSDAW","moduls":3},' +
    '{"nom": "JOAN","llinatges": "COMES BENNASSAR","cicle": "GSDDM","moduls":4},' +
    '{"nom": "MARIA","llinatges": "BISQUERRA MORRO","cicle": "GSDAW","moduls":5}' +
    "]"
  );
}

// objecteFuncioJSON.html

function tornaCadenaObjecteAmbFuncioJSON() {
  return (
    '{"Marca": "FORD","Model": "FIESTA","Matricula": "1234BCD",' +
    '"mostraInfo":"function(){return this.Marca}"}'
  );
}

// stringify.html

function toJSON(objecte) {
  return JSON.stringify(objecte);
}
