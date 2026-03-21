//  salvando na memoria

//variaveis
// palavra reservadao LET
let nome = "Thiago";
console.log(nome)

nome = "thiago lourençco"
console.log(nome)

/*const é uma forma de declarar uma constante,
ou seja, uma variável que não pode ser reatribuída depois de criada.*/

const idade = 31;
console.log(idade)
idade = 32; //vai dar erro pois o const nao pode ser mudada 

//mais sobre variaveis
let a = 10,b = 20,c = 30;

const nomecompleto ="ffjaffsa";
const nomeCompleto = "frrrrrrrrrr"

console.log(nomecompleto)
console.log(nomeCompleto)

//caracteries permiciveis
let _test = "ok";
let $test="ok";

console.log(_test,$test);


//funçoes prompt
//funçoes de prompt recebe dados de usuarios que podemos salvar  em uma variavel
const age = prompt("Digite a sua idade");
console.log(`voce tem ${age} anos.`)


//alert
//funçao alert emite uma mensgem na tela por um pop up
alert("testando")

//math 
//é uim obnjeto que possui diversas funçoes para fins matematicos
// mas: encontra o maior numero
//floo arredonda para baixo o numero

console.log(Math.max(1,2,4,10)) // me devolve maior
console.log(Math.floor(1,2,3,4))// arrendond o menor nuemro
console.log(Math.ceil(50,10,20))//arredonta pra cima

//objeto console
// O console tambem é um objetoi, assim como math. tem varias funçoes
// a sua funçao principal é exibir uma mensagem de alguma categoria na aba de console
console.log("testei")
console.error("erro!")
console.warn("aviso!")

// if 

    const m = 10
    
    if(m > 5){
        console.log("M é maior que 5")
    }
    const name ="joao"
    if(user === "joão"){
        console.log("ola joao")
    }


//else

    const loggedIn= false
    if(loggedIn){
        console.log("está conectado")
    }else{
        console.log("nao esta conectado")
    }

//else if
if(1>2){
    console.log("teste")
}else if(2>3){
    console.log("teste 3")
}else if(5>1){
    console.log("agora sim")
}

//while
//while faz uma açao até que uma condiçao seja atiginda
let p = 0;
while(p <5){
console.log(`repetindo ${p}`);
    p = p + 1
}

//do while
let o = 10;

do{
    consolçe.log(`valor de o ${o}`);
    o--;
}while( 0 >1);

//for
//for é a estrutura de repetiçao mais utilziada
for(let t=0; t<10; t++){
    console.log("repetindo algo ..")
}

//a importancia da identaçao
//utilizamos ao tab para cirar nivel de identaçao

//forçando a saida do loop (BREAK)

for(let g = 20; g>10; g++){
    console.log(`o vlaor de g é ${g}`);
    if(g === 8){
        console.log("valor é 8");
        break;
    }
}

//pulando uma execuçao do loop
//continuo pode pular uma ou mais execuçao do loop
for(let s=0; s<10; s=s+1){
    //oeprador de resto = %
    if(s %2 ===0){
        console.log("numero par")
        continue
    }
    console.log(s)
}

//switch
//para cada case, temos que adicoinar um break
//e temos o default que é como o else

const job = "advogado"

switch(job){
    case "programador":
        console.log("voce é um programador")
        break
    case "advogado":
        console.log("voce é um advogado")
        break
        default:
            console.log("profissao nao encontrada")
}
