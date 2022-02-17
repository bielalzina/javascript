const regex1 = RegExp("foo*", "g");
const str1 = "table football, foosball, Fool";
let array1;
while ((array1 = regex1.exec(str1)) !== null) {
  console.log("Trobada cadena " + array1[0]);
  console.log(
    "Es reinicia la recerca a partir de la posició " + regex1.lastIndex
  );
}

console.log();

const str2 = "table football";
const regex2 = /foo*/;
console.log(regex2.test(str2));

console.log();

var str3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regex3 = /[A-E]/gi;
var resultat = str3.match(regex3);
console.log(resultat);

console.log();

const str4 = "table football, foosball";
const regex4 = RegExp("foo[a-z]*", "g");
const coincidencies = str4.matchAll(str4);

for (const coincidencia of coincidencies) {
  console.log(
    `Trobat ${coincidencia[0]} inici=${coincidencia.index} final=${
      coincidencia.index + coincidencia[0].length
    }.`
  );
}

console.log();

const str5 =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
const regex5 = /dog/gi;
console.log(str5.replace(regex5, "cat"));

console.log();

const str6 = "Això era i no era";
const regex6 = /era/;
console.log(str5.search(regex6));

console.log();

const str7 = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel";
const regex7 = /\s*;\s*/;
var llistaNoms = str7.split(regex7);
console.table(llistaNoms);
