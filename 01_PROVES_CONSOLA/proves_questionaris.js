let a = new Array(10, 20);
//console.log(a.length);

let cotxe = { marca: "Tesla", model: "Y" };
//console.log(cotxe.marca);
//console.log(cotxe["marca"]);

const json = '["Jo", "Mateix", 12, true]';

let valors = JSON.parse(json);

valors.forEach((valor) => {
  console.log(valor);
});

console.log();

//const json2 = '["Jo", "Mateix", 12, true]';
//json2.forEach((valor) => {
//  console.log(valor);
//});

console.log();

//const json3 = '["Jo", "Mateix", 12, true]';
//let valors2 = JSON.stringify(json3);
//valors2.forEach((valor) => {
//  console.log(valor);
//});

const d = new Desbarat("Jo", 12); //nom="Jo", edat=12
const c = d;
c.edat = 34;
//console.log(d.mostra()); //Mostra els valors dels atributs nom i edat
d.mostra();
