/* Programaçao assincrona 
A programaçao assincrona precisa ser utilizada
quando as respostas nao sao abtidas de forma imediata no programa
Chamadas a uma API sao assincronas, nao sabemos quanto tempo a resposta pode demarar.
Até agora utilizamos so instrulies sincronas.
Na programaçao assincrona as execuçoes nao ocrrem em formato de fila, e sim no seu tempo.*/

//-------------------------------------

/* FUNÇOES SETTIMEOUT

A funçao setTimeout faz parte da programaçoa assincrona
Pois estabelecemos uma açao para ser executada apos um certo tempo
Ou seja, o codigo continua rodando e depois temos a execuçao da funçao
 */

console.log("ainda nao executou")

setTimeout( function()  {
    console.log("requisiçao assincrona")
}, 2000); //MILE SEGUNDOS

console.log("ainda nao executou 2")

//-------------------------------------

/* FUNÇAO SETINTERVAL 

A funçao setInterval é semelhante a setTimeout, ela é executada após um tempo
Porem ela nao para de ser executada, temos a sua chamada definida pelo tempo de espera na execuçao.
É como um loop infinito com execuçao de tempo controlada;*/ //<--- cuidado com o consume de memoria

console.log("ainda nao executou")

setInterval(function(){ //ele nao para a execuçao a cada 3 segundos
    console.log("requisiçao assincrona")
},3000); //mile segundos

console.log("ainda nao executou 2")

//-------------------------------------

/* PROMISES

As promises (proimessas) são execuçoes assincronas;
É literalmente uma promessa de um valor que pode chegar em um ponto futuro;
Utilizamos o objeto promise e alguns metodos para nos auxiliar */

const promessa = Promise.resolve(5 + 5)

console.log("algum codigo")

promessa.then((value) => {
    console.log(`A soma é ${value}`);
    return value
})
.then((value) => value -1)
.then((value) => console.log(`Agora é ${value}`))

/*promessa termina (resolve)
O .then() pega o resultado
Esse resultado vai para o parâmetro value
Você usa esse valor dentro da função */

console.log("outro codigo codigo");

//-------------------------------------

/* FALHA NAS PROMISES

Uma promise pode conter um erro, ou dependendo de como o codigo é executado podemos receber um erro;
Utilizamos a funçao catch para isso, podemos pegar o erro e exibir;
*/

Promise.resolve(4 * "asd")
.then((n) => {
    if(Number.isNaN(m)){ //NaN (Not a Number).
        throw new Error("Valors invalidos")
    }
})
.catch((err) => console.log(`um erro ocoreu: ${err}`)) //err é um parametro(variavel) que receber o err
/* 
O .catch() serve para capturar erros que acontecem em uma Promise.
👉 Pensa assim:
.then() → quando dá certo ✅
.catch() → quando dá erro ❌ */

//-------------------------------------

/* REJEITANDO PROMISES

A rejeiçao, diferente do erro, ocorre quando nos decidimos rajetar uma promise
podemos fazer isso como o metodo reject*/

function checknumber(n){
    return new Promise((resolve, reject) => { //a partir do retorn podemos utilizar como primise
    /*Uma Promise é tipo uma “promessa” de que algo vai acontecer no futuro:
    ✅ sucesso → resolve
    ❌ erro → reject*/
        if(n > 10){
            resolve(`O numero é maior que 10`)
        }else{
            reject(new Error("Numero muito baixo"))
        }
    });
}

const a = checknumber(20);
const b = checknumber(10);

console.log(a,b)

//criamos a funnçao promese com um resolver


a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu: ${err}`)
);

//-------------------------------------

/* Resolvendo varias promises

Com o metodo all podemos executar varias promises
JavaScript se encarrega de verificar e retonar os seus valores finais
*/

const p1 = new PromiseRejectionEvent((resolve, reject ) => {
    setTimeout(function(){
        resolve(10)
    }, 1000)
});

const p2 = Promise.resolve(10+10)
const p3 = new Promise((resolve, reject) => {
    if(30>10){
        resolve(30)
    }else{
        reject("Erro!")
    }
});

Promise.all([p1,p2,p3]).them((values) => console.log(values));

//OBSERVAÇAO, só vai aparecer o resultado quando todoas elas estiverem prontas, se observamos o p1 leve mil mile segundo entao o all 
//aguarda essa açao de tempo para mostrar todos os resultados

//-------------------------------------

/* ASYNC FUNCTIONS

As async functions sao funçoes que retornam promises
consequentemente há a possibilidade de receber o resultado delas depoism alem da utilizaçao dos metodos de primise
*/

 async function somarComDelay(a, b) {
    return a + b
 }

 somarComDelay(2,4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
 });

 console.log("testAssinc")

 //-------------------------------------

 /* Instruçao await  ASYNC AWAIT
 A instruçao await serve para aguardar o resultado de uma async function;
Tornando mais simples lidar com este tipo de funçao, desta maneira nao precisamos trabalhar diretamente com promises
*/

function resolveDelay(){
return new Promise((resolve) =>{
    setTimeout(() => {
        resolve("Resolveu a promise")
    },2000)
})
}

async function chamadaAsync() {
    console.log("Chamanda a Promise, e esperando  oresultado")
    const result = await resolveDelay () 
    /* 👉 EXATAMENTE ISSO 🔥
    Ele:
    pausa a execução
    espera a Promise terminar
    só depois continua */
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync()

 //-------------------------------------
 //nao muitos utilizados
 /* GENERATOrS
 Generators funcionam de forma semelhante as primises
 açoes porem ser pausadas e continuadas depois.
 temos novos operados, como function*9 e yield 
 */

 function* genarator(){
    yield 1;
    yield 2;
 }

 const gen = generator();

console.log(gen.next().value);



