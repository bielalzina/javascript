
// ************ SPLIT *********************

/*
let data = "25/01/1969";
console.log(data);

console.log(typeof data);
console.log();

let parts = data.split("/");

console.log(parts);
console.log(parts.length);
console.log(typeof parts);

console.log();
console.log(isNaN(parts[0]));
console.log(isNaN(parts[1]));
console.log(isNaN(parts[2]));
*/

// ***************************************************

let mes = 2;
let any = 2015;

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
            if ((any % 4 === 0) && ((any % 100 !== 0) || (any % 400 === 0))) {
                dia = 29;
            } else {
                dia = 28;
            }

            break;
        }
    }
    return dia;
}


//console.log(any % 4);
//console.log(any % 100);
//console.log(any % 400);
//console.log(validaDiaDelMes(mes, any));

console.log();

// ************************************

let nif = "78207737D";
let lletra = nif.charAt(8);
console.log(lletra);
let numero = nif.substring(0, 8);
console.log(numero);
console.log(typeof numero);
numero = parseInt(numero);
console.log(typeof numero);
let index = numero % 23;
console.log(index);

console.log();

nif = "A8207737D";
lletra = nif.charAt(8);
console.log(lletra);
numero = nif.substring(0, 8);
console.log(numero);
console.log(typeof numero);
numero = parseInt(numero);
console.log(typeof numero);
index = numero % 23;
console.log(index);

console.log();

