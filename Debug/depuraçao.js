"use strict";

opa = "teste";
const opa = "teste";

//const undefined = 10, strick nao permite utilziar nome do java scrip para definir variaveis
//nao pode deletar uma propriedade de uam array delete [].legth;

//---------------------------------------------------------

/* console.log */

let a = 1;
let b =22;

if (a == 1){
    a = b+2;
}

console.log(a);

for (let i = 0; i<b; i++){
    a = a +2;
    console.log(a)
}

if(a>5){
    a = 25;
}
console.log(a)

//---------------------------------------------------------


/* Trata,emtp de dado por funçao
Nunca podemos confiar no dado que é passado pleo ususario;
Sempre devemos crar validaçoes e tratamento para os mesmos
Ao longo do curso aprenderemos diversas tecnicas */

function checkNumber(n){
    const result = Number(n);
    if(Number.isNaN(result)){
        console.log("valor incorreto!");
        return
    }
    console.log("Valor correto");
    return result;
}

//---------------------------------------------------------

/* Exceptions
As exceptions sao erros que nos geramos ao programar
Este recusro faz o programa ser abortado, ou seja, ele nao continua sua execuçao
Utilizamos a expressao throw new Error, com a mensagem de erro como argumento */

let x = 10;

 if(x != 11){
    throw new console.error( "valor de X nao pode ser diferente de 11!");
    
 }

 //---------------------------------------------------------

 /* Try catch
 Try catch é um recurso famoso nas linguagens de programaçao
 Onde tentamos excutar algo em try, e se um erro ocorrer ele cai no bloco do catch;
 util tanto para debug, como tambem no desenvolvimento de uma aplicaçao solida;
  */

 try{
    const soma = x + y;
 }catch(error){
    console.log(`Erro no programa: ${error}`)
 }

 //---------------------------------------------------------

 /* Finaly 
 O finaly é uma instruçao que vai depois do bloco try carch;
 ela é executada indenpendente de haver algum erro ou nao em try */

 try{ 
    const value = checkNumber("asd")
    if(!value){

        throw new erro("valores invalidos!");
    }
}catch(error){
    console.log(`Opa, aconteceu um problema ${erro}`)
}finally{
    confirm.log("codigo foi executado") //executa o codigo de qualquer maneira

}
//---------------------------------------------------------

/* Assertion
Assertions sao quando os tratamentos de valroes passados pelo usuario, geram um erro
Porem este recusro tem como objetivo nos ajudar desenvolvimento do programa, ou seja, seria algo para os devs e nao para os usuarios */

function checkArray(arr){
    if(arr.length === 0){
        throw new error("O array precisa ter elementos");
    }else{
        console.log(`O array tem ${arr.length} elementos`)
    }
}

checkArray([1,2,4,5])
