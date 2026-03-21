//criando uma funçao
function minhaFuncao(){
    console.log("minha funaçao")
}

minhaFuncao()
//funçao em  variavel
const minhaFuncaoEmVariavel = function(){
    console.log("minha funça em variavel")
};

//funçao com parametro
function fimcapPARAMETRO(txt){
    console.log(`imprimindo parametro ${txt}`);
}

fimcapPARAMETRO("ola parametro");

//retorno das funçoes -- RETURN
const a = 10
const b = 20
const c = 40
const d = 50

function soma(n1,n2){
    return n1+n2;
}

const resultado = soma(a,b)
console.log(resultado)
console.log(soma(a,d))

//escopo de funçoes

let y = 10 
function testandoEscopo(){
    let=20
    console.log(`Y dentro da funçao é ${y}`)
}

console.log(`Y forazx  funçao é ${y}`)

//escopo aninhado (nested scopes)
//as formas de criar variaveis, let e const, nos dao a possivilidade do escopo aninhado
//que consiste em ter em qualque bolco a declaraçao dae variaveis separados dos outros escopos

let m = 10

function escopoAninhado(){
    let m= 20;
    if(true){
        letm = 30;
        if(true){
            let m = 40;
            console.log(m);
        }
        console.log(m);
    }
    console.log(m);
}
escopoAninhado();
console.log(m);

//Arrow function
//Arrow funcion é uma outra forma que temos de crair funçoes
//é uma sintaxe resumida, que tem algumas diferenças das funçoes normais

const testeArrow = () => {
  console.log("esta é uma arrow function")  
};

testeArrow();

const parOuImpar = (n) =>{
    if(n % 2 ===0){
        console.log("Par");
        return 
        // colocamos o return quando nao quero mais nada 
        // nessa funçao tecnica early return (return quando satisfaz a funçpao) 
    }
    console.log("impar")
};

parOuImpar(10);
parOuImpar(5);

const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQuadrada(4))

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(12))

//Argumentos opcionais

const multiplation = function(m,n){
    if(n === undefined){
        return m*2
    } else{
       return m * n
    }
};

console.log(multiplation(5))
console.log(multiplation(5,20))

const greeting = (navigator) =>{
    if(!name){
        console.log("ola")
        return
    }

    console.log(`olá ${name}`)
}

greeting();
greeting("thiago");

//Argumentos com valor default
//valor default é quando o argumento tem um valor previo


const customGreeting = (name,greet = "olá") =>{
    return `${greet}, ${name}`
};

console.log(customGreeting("maria")); //como o greet foi como ola ja foi definido 
console.log(customGreeting("Joao","olá")); //aqui estou subscrevendo o greet

//closure

//closure é um conjunto de funçoes onde temos um raproveitamento o escopo interno de uma funçao
//pois este escopo nao pode ser acessado fora da funçao ja que é um bloco


function someFunction(){
    let txt = "alguma coisa"

    function display(){
        console.log(txt)
    }

    display()
}

someFunction();

//podemos salvar os resultados ja executados

const multiplationClosure = (n) => {
    return(m) =>{
        return n * m;
    };
}

const c1 = multiplationClosure(5);
const c2 = multiplationClosure(10);

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

//Recursao
//um recurso que permite a funçao se autoinvocar continuamente, criando uam especie de loop
//é interessante definir uma condiçao final para para a executaçao

const untilTem = (n, m) =>{
    if(n<10){
        console.log("a funçao parou de executar")
    }else{
        const x = n - m
        console.log()
        untilTem(x,m)
    }
}

untilTem(100,7)

function factorial(x){
    if(x ===0){
        return 1
    }else {
        return x * factorial(x - 1)
    }
}

const num = 6;
const result = factorial(num)
console.log(`o fatorial do numero ${num} é ${result}`);
