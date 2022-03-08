let avui = new Date("2022-02-20");
console.log(avui);
console.log(avui.getTime());

let ahir = new Date("2022-02-18");
console.log(ahir);
console.log(ahir.getTime());

console.log();
console.log(avui.getTime() - ahir.getTime());

console.log();
console.log(avui);
console.log(avui.getTime());

console.log();
let avuiAra = Date.now();
console.log(avuiAra);
let milisegonsDia = 1000 * 60 * 60 * 24;
let avuiNomesData = Math.floor(avuiAra / milisegonsDia) * milisegonsDia;
console.log(avuiNomesData);
