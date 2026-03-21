console.log("executo js2");

// 1- Number
console.log(typeof 2);
console.log(typeof 3);
console.log(typeof 25);

//Aritmietica com Numbers (operaçao matematica)
console.log(2+4);
console.log(2-4);
console.log(2-4 + (8/9));

//Special Number - sao dados considerados como numeros, mas nao funcionam como eles
/*
eles são:
-infinity:
-infinity:
-NaN(Not a number)
Algumas operaçoes podem resultar nestes valores
*/
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// Strings 

console.log("um texto");
console.log('um texto');
console.log(typeof'um texto');

// caracteres em string
 
console.log("asdasfafs \n sfasaf");

//contatenar

console.log("asdfasfa" + "afasfasas" + "asfdafsa");

// template string

console.log(`a soma de 2 + 2 é: ${2+2}`); //somente ente crases

//boolean

console.log(true);
console.log(2 > 3);
console.log(typeof false)

//comparaçoes

// =>, <=, >, >, == e ===

//operadores logicos

// && and - true apenas  se os dois dados forem verdadeiros
// || or - para ser true um lado como true  é suficiente
//! - not -  este operador inverter a comparaçao

// OPERADORES LOGICOS

console.log(true && true)
console.log(true || true)
console.log(!true)

//dados empty
// temos dois valores reservados que pertencem a este grupo de dados: undefined e null;
// undefined geralmente é visto quando utilizamos um codigo que ainda nao foi definido.
// ja onull, costuma ser imposto pelos programadores,para determinar que nao ha ainda um valor.

console.log(typeof null, typeof undefined);

//conversao de tipo de automatica.
//em java cript algumas operaçoes mudam o tipo de dado e isso acontece silenciosamente

/* 
5* null =>
"5"-3 =>2
"5" + a => 51 
"a" ** "b"=> NaN
*/

console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);