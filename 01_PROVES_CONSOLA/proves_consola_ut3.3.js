// ARRAY

console.log();
console.log("ARRAY");
console.log();

let valors = [2, "Hola", true, 43.34];

valors[6]="Adeu";

for (let i =0 ; i < valors.length; i++) {
    console.log("Valor en posició "+i+" = "+valors[i]);
}

console.log(valors[8]);


// RECORREGUT ARRAY

console.log();
console.log("RECORRENT ARRAY");
console.log();

for (let i =0 ; i < valors.length; i++) {
    console.log("Valor en posició "+i+" = "+valors[i]);
}

console.log();

for (let index in valors) {
    console.log("Valor en posició "+index+" = "+valors[index]);
}

console.log();

for (let value of valors){
    console.log(value);
}

console.log();

valors.forEach(contingut => console.log(contingut));


// CONCATENAR ARRAYS

console.log();
console.log("CONCATENAT ARRAYS");
console.log();

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];

const children1 = arr1.concat(arr2);

console.log(children1);

const children2 = arr1.concat(arr2, arr3);

console.log(children2);

// UNIR ELEMENTS D'UN ARRAY

console.log();
console.log("UNINT ELEMENTS D'UN ARRAY");
console.log();

const paraules = ["Hola", "Joan"];

const frase = paraules.join(" ");

console.log(frase);

// INVERTIR ORDRE ELEMENTS D'UN ARRAY

console.log();
console.log("INVERTINT ORDRE ELEMENTS D'UN ARRAY");
console.log();

let numeros = [1,2,3,4,5];
console.log(numeros);
let numerosInvertit = numeros.reverse();
console.log(numerosInvertit);

// AFEGIR i ELIMINAR ELEMENTS D'UN ARRAY

console.log();
console.log("AFEGINT i ELIMINANT ELEMENTS D'UN ARRAY");
console.log();

let nombres = [10,20,30,40,50];
console.log(nombres);
console.log(nombres.length);

console.log();

let eliminat=nombres.pop();
console.log(eliminat);
console.log(nombres);
console.log(nombres.length);

console.log();

eliminat=nombres.shift();
console.log(eliminat);
console.log(nombres);
console.log(nombres.length);

console.log();

let afegit=nombres.push(50);
console.log(afegit);
console.log(nombres);
console.log(nombres.length);

console.log();

afegit=nombres.unshift(10);
console.log(afegit);
console.log(nombres);
console.log(nombres.length);



// SPLICE

console.log();
console.log("SPLICE");
console.log();

let fruites = ["Platan","Taronja","Poma","Pera"];
console.log(fruites);

console.log();

fruites.splice(2,0,"Kiwi","Llimona");
console.log(fruites);

console.log();

fruites.splice(3,2);
console.log(fruites);

// SLICE

console.log();
console.log("SLICE");
console.log();

let fruits = ["Poma","Pera","Kiwi","Llimona","Taronja"];
console.log();

const fruits1=fruits.slice(2,4);
console.log(fruits1);

console.log();

const fruits2=fruits.slice(2);
console.log(fruits2);


// SORT

console.log();
console.log("SORT");
console.log();

let lletres = ["B","C","A"];
console.log();

console.log(lletres);
console.log();

lletres.sort();

console.log(lletres);

lletres.reverse();

console.log();

const numbers = [40, 100, 1, 5, 25, 10];

console.log(numbers);

console.log();

console.log("SORT ALFABETICAMENT");

numbers.sort();

console.log(numbers);

console.log();

console.log("SORT NUMERICAMENT");

numbers.sort(function(a,b){return a - b});

console.log(numbers);


// ARRAY.MAP

console.log();
console.log("ARRAY.MAP");
console.log();

var quadrats=[1,4,9,16];

var arrels = quadrats.map(Math.sqrt);

console.log(arrels);

// AMB FUNCIÓ PROPIA

function doble(num) {
    return num*2;    
}

var dobles1=arrels.map(doble);
console.log(dobles1);

var dobles2=dobles1.map(function(num){return num*2});
console.log(dobles2);


// ARRAY.FILTER

console.log();
console.log("ARRAY.FILTER");
console.log();

let dades = [10,5,20,15,30];

let majors15 = dades.filter((valor) => {
    return valor >= 15;
});

console.log(majors15);

// ARRAY REDUCE

console.log();
console.log("ARRAY REDUCE");
console.log();


let dadesx = [0,1,2,3,4];
let total=dadesx.reduce((acumulat,elementActual)=>{
    return acumulat+elementActual;
});

console.log(total);

let total1=dadesx.reduce((acumulat,elementActual)=>{
    return acumulat+elementActual;
},5);

console.log(total1);

console.log();


const numbersx = [1,2,3,4];
console.log(Math.floor(numbersx[0]));
console.log(Math.floor(numbersx[1]));
console.log(Math.floor(numbersx[2]));
console.log(Math.floor(numbersx[3]));


function getSum(acumulat, num) {
  return acumulat + num;
}

let total2 = numbersx.reduce(getSum);

console.log(total2);

let total3 = numbersx.reduce(getSum,7);


console.log(total3);

// CONVERTIR ARRAY MULTIDIMENSIONAL EN UNIDIMENSIONAL

let multi = [[0,1],[2,3],[4,5]];

function multiToUni(a,b){
    return a.concat(b);
}

let uni = multi.reduce(multiToUni);
console.log(uni);

// ARRAY FROM

console.log();
console.log("ARRAY FROM");
console.log();

const text ="GABRIEL";

const nom = Array.from(text);

console.log(nom);

// ARRAY INCLUDES

console.log();
console.log("ARRAY INCLUDES");
console.log();

const llistaNoms = ['Gabriel', 'Victoria', 'Pruna', 'Blanca', 'Estrella'];

console.log(llistaNoms.includes('Pruna'));
console.log(llistaNoms.includes('Pruna',3));
console.log(llistaNoms.includes('Pruna',2));

// DATE

console.log();
console.log("DATE");
console.log();

var data = new Date();
console.log(data);

var data1 = new Date(10000000000000);
console.log(data1);

var data2 = new Date(2010,5,13);
console.log(data2);

var data3 = new Date(2010,5,13,10,45,55);
console.log(data3);

var data4 = new Date("11/25/2012");
console.log(data4);

const d = new Date();
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

let ms = Date.parse("Marzo 21, 2012");
console.log(ms);


console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());

// STRING 

var str = "CIFP Joan Taix";
var etiqueta = str.link("http://www.cifpjoantaix.cat");
console.log(etiqueta);

// GLOBAL

let x = 1.797693134862315E+308;
let y = x * 1.001;
console.log(y);

let z;
console.log(z);

let p1="123";
let p2 = "hola";

console.log(isNaN(p1));
console.log(isNaN(p2));

let p3=String(new Date());
console.log(p3);


// FUNCTION

var funcio = new Function("a", "b", "return a+b;");
console.log(funcio(2,3));


// SET

console.log();
console.log("SET");
console.log();

const mySet = new Set;

mySet.add(1);
mySet.add(5);
mySet.add('some text');
mySet.add('SOME TEXT');

const o = {a: 1, b: 2};

mySet.add(o);

mySet.add({a: 1, b: 2}); // la varibale o referencia a un altre objecte, per la qual cosa afegeix un altre valor

console.log(mySet.has(1));
console.log(mySet.has(3));
console.log(mySet.has(5));
console.log(mySet.has(Math.sqrt(25)));
console.log(mySet.has('some text'));
console.log(mySet.has("SOME TEXT"));
console.log(mySet.has('Some Text'));
console.log(mySet.has(o));

console.log(mySet);

console.log(mySet.size);

for (const valor of mySet) {
    console.log(valor);
}

console.log(mySet.delete(5));

console.log(mySet);

console.log(mySet.size);

mySet.clear();

console.log(mySet);

console.log(mySet.size);

// MAP

console.log();
console.log("MAP");
console.log();

const myMap = new Map();

myMap.set('a',1);
myMap.set('b',2);
myMap.set('c',3);

console.log(myMap);

console.log(myMap.get('b'));

myMap.set('b',6);

console.log(myMap.get('b'));




console.log(myMap);

myMap.delete('b');


console.log(myMap.get('b'));

console.log(myMap.has('b'));




console.log(myMap);


const contacts = new Map();

contacts.set('Biel',{tf:'669668705', adr:'Ric, 47'});
contacts.set('Joan',{tf:'971540008', adr:'Mestre Arabi, 11'});
contacts.set('Tolo',{tf:'616740521', adr:'Major, 7'});

console.log(contacts);

console.log(contacts.get('Joan'));
console.log(contacts.has('Joan'));

console.log();

for (var valor of contacts.values()) {
    console.log(valor);
}

console.log();

for (var clau of contacts.keys()) {
    console.log(clau);
}

console.log();

for (var [clau,valor] of contacts.entries()) {
    console.log(clau +" : "+valor);
}

//ARRAY.INDEXOF

console.log();
console.log("array.indexOf");
console.log();

//Cream array de 10 elements amb valors numerics sencers aleatoris 
//compreos entre 0 i 10

console.log();

let numAleatoris = [];
    for (let i = 0; i < 10; i++) {
        numAleatoris.push(Math.round(Math.random()*10));
}

console.log(numAleatoris);

for (let i = 0; i < numAleatoris.length; i++) {
    console.log(numAleatoris.indexOf(numAleatoris[i]));    
}

console.log(numAleatoris.indexOf(11));







