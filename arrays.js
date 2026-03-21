// arrays

const lista = [1,2,3,4,5,6,7]
const listaItens = ["thiago", 1,3,4, true, false]; //lista com propriedades diferentes
console.log(lista);
console.log(typeof(lista))

// ------------------------------------

// propriedades
const number = [5,3,4];

console.log(number.length)
console.log(number["length"])

const myName = "Matheus";
console.log(myName.length)//com o length consiguimos verficar 
// a quantidade de caracteres que tem a palavra


// ------------------------------------

//acessando item da lista
const letras = ["a","b","c"]

console.log(arr[1]); // lembrando que sempre se começa com o  zero o array

//metodos
const numberr = [5,3,4];
const otherNumbers = [1,2,3]

const allNumber = numberr.concat(otherNumbers)
console.log(allNumber);


// ------------------------------------

//objetos (object literals)
//em Js temos um tipo de dado que é o objeto, mas seu nome tecnico é bject literals;
//Isso porque o objeto vem da orientaçao a objetos.

const person = {
    name: "thiago",
    age: 31,
    job:"programador"
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.name.length);

//6 - criando e deletando propriedade
const car = {
    engine: 2.0,
    brand:"VW",
    model:"Tiguan",
    KM: 20000,
};

console.log(car);

//adicionando propriedade
car.door = 5;
console.log(car);

//deletando
delete car.KM
console.log(car);


// ------------------------------------

/*diferença entre arrays e objetos
os arrays sao utilizaods como lista de itens, geralmente todos possuem o mesmo tipo.
ja os opjetos sao utilziados para descrever um item, contem as informaçoes do mesmo, e as propriedades 
possuiem diferentes tipos de dados
-- podemos ter tambem um array de objetos..*/

/* mais sobre obejtos
podenmos copias toadas as propriedades de um objeto para outro com o METODO ASSIGN */

const obj = {
    a: "tste",
    b:true
}

console.log(obj instanceof Object);

const obj2 = {
    c:[]
};

Object.assign(obj2,obj) //primeiro final qual que eu quero as propriedade, e o qual eu quero passar as propriedades
console.log(obj2);

console.log(Object.keys(obj))
console.log(Object.keys(obj2))//mostra a chaves que tem no objeto
console.log(Object.entries(obj2))//mostra a chaves e os valores 


// ------------------------------------

//Mutaçao (mutability)
/*
Outra caracteristica interesasnte é a mutaçao, isso ocrre quando craimos um obejtoi a partir de ondurationchange.apply
este novo objeto, não é novo e sim uma referenmcia do primeiro*/

const a = {
    name: "Thiago"
}

const b = a

console.log(a);
console.log(b);

a.age = 31;


console.log(a);
console.log(b);

delete b.age


console.log(a);
console.log(b);

//lembrando que nao é uma copia e sim uma referencia



//loop em array

const users = ["thiago", "matheus","barquinho"]

for( let i = 0; i< users.length; i++){
    console.log(`Listando o ususario: ${users[i]}`)
}

// ------------------------------------

/* metodos de array push e pop
Os metodos de array sao muito uteis para manipular os arrays, ou seja, alterar os seus valores de alguma form,a;
Com o push adicionamos um item ao fim do array
com o pop temos a remoçao de um elemento no fim do array; */

const array = ["a","b","c"]

array.push("d") // adcionando
console.log(array);

array.pop();
console.log(array);

const arrayItemRemovido = array.pop();
console.log(arrayItemRemovido); //consigo retorna o elemente removido
console.log(array);

array.push("z","x","y"); //consigo adicionar mais de um item no array pelo push

// ------------------------------------

/* metodos de array shift e unshift 
Ao contrario de opo e push, temos shift e unshift
O metodo shift remove o primeiro elemento do array;
O metodo unshift adiciona itens ao inicio do array*/

const letters = ["a","b","c"];

const letter = letters.shift();
console.log(letter)
console.log(letters)

letters.unshift("p","h","g");
letters.unshift("z")
console.log(letters)

// ------------------------------------

/*metodos de array: indexoF e latINdexOf
O metodo indexOf nos permite encontrar o indice de um elemento, que passamos como argumneto para o metodo
Já o lastIndexOf é utilizado quando há repetiçoes de elementos e precisamos do indice da última ocorrência */

const myElements = ["Morango","abacate","maça","pera","abacate"];

console.log(myElements.indexOf("maça")); //result 2
console.log(myElements.indexOf("abacate")); //result 1 lendo no sentido horario

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("abacate")]);

console.log(myElements.lastIndexOf("abacate")); //result 4

console.log(myElements.indexOf("mamao")); //casso o resultado nao exista o resutlado é -1
console.log(myElements.lastIndexOf("mamao")); //casso o resultado nao exista o resutlado é -1



// ------------------------------------

/* Metodo de array: slice 
O metodo slice é utilizado para extrair um array menor de um array maior.
O intervalo de elementos é determinado pelos parãmetros, que são: o indice de incio e o indice de fim.
O último elemento é ignorado, se quisermos ele devemos somar 1 ao indice final*/

const testeSlice = ["a","b","c","d","h"];
const subArray = testeSlice.slice(2,4); // eOu seja, ele pega do índice 2 até antes do 4.
console.log(subArray);
console.log(testeSlice);
//caso eu queira pegar do 2 ao 4 podemos usar (testeSlice.slice(2,5)) ou testeSlice.slice(2,4+1)
//caso coloque um valor que nao corresponde ele retorna uma lista vazia

const subArray4 = testeSlice.slice(2); //pego os indices do 2 em diante
console.log(subArray4);

// ------------------------------------

/* Metodos de array: forEach
O forEach é como uma estrutura for ou while, porem é um metodo
Ele percorre cada um dos elementos do array
Para alguns sua sintaxe pode ser mais simples */

const nums = [1,2,3,4,5];
nums.forEach((numero) =>{
    console.log(`numero é ${numero}`);
});

const posts = [
    {title: "primeiro post", category:"PHP"},
    {title: "segundo post", category:"PHP"},
    {title: "terceiro post", category:"PHP"},
];

posts.forEach((post) =>{
    console.log(`Exibindo post:${post.title}, da categoria: ${post.category}`)
});

// ------------------------------------

/*Metodos de array: includes
O metodo includes verifica se o array tem um elemento.
Utilizamos no array e como argumento colcoamos o elemento que buscamos*/

const brands = ["BMW", "fiat","mercedes"];
console.log(brands.includes("fiat")); //verica e retorna true ou false
console.log(brands.includes("false")); //verica se um marca existe
if(brands.includes("BMW")){
    console.log("há carros da marca BMW")
}

// ------------------------------------

/*Metodo de array: reverse
O metodo reverse inverte os elementos de um array
este metodo modifica o array original, entao tome cuidado */

const reversetest = [1,2,3,4,5,5]
reversetest.reverse(); // estou invertendo a ordem do array original
console.log(reversetest);

// ------------------------------------

//METODOS EM STRING

/*sobre os metodos de string
As strings tambem sao objeto, ou seja, tem metodos e propriedades alguns muitos semelhantes ao de array
note que voce pode utilizar length em uma string ou em um array
e tambem acessar cada caractere pelo seu indice. */


/* Métodos de string: trim
Otrim remove tudo que nao é texto em uma string*/

const trimTest = "     testando /n"

console.log(trimTest);
console.log(trimTest.length);
console.log(trimTest.trim().length);

// ------------------------------------

/* metodo de string> padstart
O método padStart insere um texto no começo da string
O texto pode ser reprtido, de acordo com o segundo argumento ao metodo, ele determina o maximo de caracteres do testo alvo*/

 const testePadStart = "1";
 const newNumber = testePadStart.padStart(4,0); //quero q a sting tenha no maximo 4 de digito e preencher com o 0
 console.log(testePadStart);
 console.log(newNumber);

 const testepadEnd = newNumber.padEnd(10,"0");
 console.log(testepadEnd); 

/*A string precisa ter 4 caracteres no total
Se faltar caracteres, ele preenche no início
Usando 0 */


// ------------------------------------

/* Metodos de String: split
o split divide uma string em um array
cada elemento sera determinado por um separador em comun
os mais utilizdo sao: ponto e virgula, virgula e espaço */
 
const frase = "O rato roeu a roupa do rei de roma";
const arrayDaFrase = frase.split();
console.log(arrayDaFrase); //criei um array com os itens dentro dessa array referente 
// a cada palavra da frase ["o", "rato"].... a cada espaço é adicionado o item no array

// ------------------------------------

/* metodo join]
 ja o join ele une um array em um string*/

 const fraseDeNovo = arrayDaFrase.join("")
 console.log(fraseDeNovo);


 const itemParaCompra = ["mouse","teclado","monitor"];
 const fraseDeCompra = `precisamos comprar: ${itemParaCompra.join(",")}.`;
 console.log(fraseDeCompra)

 /* 
 por isso do ("")
 join("") → junta tudo sem separador
const array = ["O","l","a"];
console.log(array.join(""));   // Ola
console.log(array.join(" "));  // O l a
console.log(array.join("-"));  // O-l-a
console.log(array.join(","));  // O,l,a */

// ------------------------------------

/* Metodo de string: repeat
O metodo repeat repete umn texto n vezes, onde n é o numero que colocamos como seu argumento */

const palavra = "testando";
console.log(palavra.repeat(5))

// ------------------------------------

/* Rest Operato / Rest Parameters
 Rest Operator é caracterizado pelo simbolo ...
 podemos utiliza-lo para receber indefinidos argumentos em uma funçao
 assim nao precisamo declarar exatamente oque vamos receber, deixando a funçao mais ampla*/

 const somaInfinita = (...args) => {

    let total = 0;
    for(let i=0; i < args.length; i++){
        total += args[i];
    }
    return total;
 };

 console.log(somaInfinita(1,2,3));
 console.log(somaInfinita(1,34,34,54,65,54))

 // ------------------------------------

 //Estrutua de repetiçao for...of
 /* O for...of é uma estrutura de repetiçao semelhante ao for, porem mais simples;
 O numero de repetiçao é baseado no array utilizado.
 E podemos nos referir aos elementos sem precisar a acessar o indice deles. */

 const somaInfinita2 = (...args) =>{

    let total = 0
    for(num of args){
        total += num;
    }
}

    console.log(somaInfinita2(1,23,1,434,3,53,))

// ------------------------------------

/* Destructuring em objetos.
O destruicturing é uma funcionalidade que nos permite desestruturar algum dado;
No caso dos objetos, é possivel criar variasveis a partir das suas propriedades, com uma simples sintaxe.*/

const userDetails = {
    firstName:"Thiago",
    lastNmae: "Lourenço",
    job: "Programador"
}

 const {firstName, lastNmae, job} = userDetails;
 
 console.log(firstName, lastNmae, job);

  //renomar variaveis
  const{firstName: primeiroNome} = userDetails;
  console.log(firstName);

  // ------------------------------------

  /* Destructuring em arrays 
  O destructuring tambem pode ser utilizado para desestruturar um array em variaveis
  a sintaxe é um pouco diferente, agora utilizaremos colchetes, e nao temos nome das chaves*/

  const myList = ["avião", "submarino", "carro"]

  const [veiculoA, veiculoB, veiculoC] = myList;

  console.log(veiculoA,veiculoB,veiculoC);

// ------------------------------------

/* Json
O JSON, javaScript Object Notatuion, é um dado em formato de texto;
Utilizamos para comunicaçao entre api e front-end;
sua formataçaoe é rigorosa, se for mla feita o dado é invalidade e nao conseguimos comnunicaçao.
seu formato lembra os obeject literals;
REGRA: apenas aspas duplas e nao aceita comentarios; */

const myJson = '{"name": "Thiago", "age": 29, "skills": ["PHP", "JavaScript"]}' // é assim que vou receber os dados em json, nome da propriedade dois pontos e valor da propriedade lembrando
//aspas simples na abertura e colchetes.

// ------------------------------------

/*Json para objeto e objeto para JSON 
Na maioria das vezes vamos precisar converter objetos para JSON;
OU um JSON para um Objeto JavaScript valido;
Utilizamos o objeto JSON e os metodos stringify e parse;*/


const myObject = JSON.parse(myJson); //JSON.parse() converte a string JSON em um objeto JavaScript.

console.log(myObject);
console.log(myObject.name);
console.log(typeof myObject);

//JSON invalido (teste)
const badJson = '{"name": Matheus, "age":31}'

const myBadObject = JSON.parse(badJson); //vai dar erro

const myNewJson = JSON.stringify(myObject); //O método JSON.stringify() converte um objeto JavaScript em uma string no formato JSON.

console.log(myNewJson);
console.log(typeof myNewJson);