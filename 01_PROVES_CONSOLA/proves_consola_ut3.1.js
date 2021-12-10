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

function resta(a,b) {
    console.log();
    console.log("Nombre de parametres PASSATS, no els ESPERATS: " + arguments.length);
    console.log();
    for (let i = 0; i < arguments.length; i++) {
        console.log("Parametre [" + i + "] = " + arguments[i]);
    }
    console.log();
    console.log(arguments.callee);
    console.log();
    console.log(arguments.callee.caller);
    console.log();
    console.log("Nombre de parametres ESPERATS, no els PASSATS: " + resta.length);
    console.log();
    console.log(resta.name);
    console.log();
    console.log(resta.caller);
}

resta (5,2,3,4);



