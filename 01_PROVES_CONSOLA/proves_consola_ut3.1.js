// function suma(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(a+b+c);
// }

// suma (1,2,3);
// console.log();
// suma (1,2);
// console.log();
// suma (1,2,3,4);

// function resta(a,b) {
//     console.log();
//     console.log("Nombre de parametres PASSATS, no els ESPERATS: " + arguments.length);
//     console.log();
//     for (let i = 0; i < arguments.length; i++) {
//         console.log("Parametre [" + i + "] = " + arguments[i]);
//     }
//     console.log();
//     console.log(arguments.callee);
//     console.log();
//     console.log(arguments.callee.caller);
//     console.log();
//     console.log("Nombre de parametres ESPERATS, no els PASSATS: " + resta.length);
//     console.log();
//     console.log(resta.name);
//     console.log();
//     console.log(resta.caller);
// }

// resta (5,2,3,4);


function mostraNom(nom="GABRIEL") {
    console.log(nom);
}
mostraNom();

mostraNom("VICTORIA");

function mostraDades(nom="GABRIEL",llinatges="ALZINA ALOMAR", adreca="MAJOR, 7") {
    console.log("NOM: "+nom);
    console.log("LLINATGES: "+llinatges);
    console.log("ADREÇA: "+adreca);
    console.log();

}

mostraDades();

//mostraDades("VICTORIA",,"RIC, 11");

mostraDades("VICTORIA","AMER","RIC, 11");

mostraDades("VICTORIA","RIC, 11");


// PARAMETRES REST

function suma1(...valors) {
    let resultat = 0;
    for (let i = 0; i < valors.length; i++) {
        resultat = resultat + valors[i];        
    }
    return resultat;
}

console.log(suma1(1,2,3,4));

function suma2(...valors) {
    let resultat = 0;
    for (let index in valors) {
        resultat += valors[index];        
    }
    return resultat;
}

console.log(suma2(1,2,3,4));

function suma3(...valors) {
    let resultat = 0;
    for (let value of valors) {
        resultat += value;        
    }
    return resultat;
}

console.log(suma3(1,2,3,4));

function suma4(...valors) {
    resultat = valors.reduce((a,b)=>a+b);
    return resultat;
}

console.log(suma4(1,2,3,4));

function suma(a,b){
    return a+b;
}

let operacio = suma;

console.log(operacio(2,3));

let suma5 = function (a,b) {
    return a+b;
};

console.log("SUMA 5");
console.log(suma5(2,3));


// FUNCIO COM A PARAMETRE

console.log("FUNCIO COM A PARAMETRE");

function adicio(a,b) {
    return a+b;
}

function diferencia(a,b) {
    return a-b;
}

function calcula(a,b,operacio) {
    return operacio(a,b);
}

console.log(calcula(3,2,adicio));
console.log(calcula(3,2,diferencia));

// FUNCIO INTERNA

console.log();
console.log("FUNCIO INTERNA");
console.log();

function grossa(a,b) {
    let cadena = 'RESULTAT: ';
    function petita(valor) {
        console.log(cadena+valor);
    }
    petita(a+b);
}

grossa(2,3);

// FUNCIO ARROW

console.log();
console.log("FUNCIO ARROW");
console.log();

let suma6 = (a,b)=>{
    return(a+b);
}

console.log(suma6(3,2));

let negatiu = a =>{
    return -a;
}

console.log(negatiu(5));

let negatiu2 = a => -a;

console.log(negatiu2(10));
