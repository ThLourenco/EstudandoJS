/* Oque são eventos?
Açoes streladas a algum comportamento do usuario
por exemplo: click, alguma tecla, movimento da tela e do mause;
Podemos inserir logica quando estes eventos ocorrem
E podemos disparar eventos em certos elementos
esta tecnica é conhecida como event handler */

//---------------------------------------------

/*COMO ACIONAR UM EVENTO

Primeiramente precisamos selecionar o elemento que vai disparar o evento;
Depois vamos ativar um metodo chamado addEventListener
Nele declaramos qual o tipo do evento, e por meio de callback definimos oque acontece;

📌 O que é um callback?
👉 Um callback é simplesmente:
uma função que você passa como argumento para outra função, para ser executada depois

*/

const btn =document.querySelector("#my-button");

btn.addEventListener("click", function(){
    console.log("clicou aqui!")
});

//---------------------------------------------

/* REMOVENDO EVENTOS

Há situaçoes que vamos querer remover os eventso dos elementos
O metodo para isso é removeEventListener;
Passamos o evento que queremos remover como argumento*/

const secondBtn = document.querySelector("#btn");

function imprimirMensagem(){
    console.log("teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () =>{
    console.log("Evento removido");
   secondBtn.removeEventListener("click", imprimirMensagem)
   //quando eu removo o evento o evento nao funciona mais no btn por isso devemos nomear a funçao

});

//---------------------------------------------

/* O objeto do evento

Todo evento possui um argumento especial, que contem ingormaçoes do mesmo
Geralmente chamado de event ou e;
*/

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) =>{
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

//---------------------------------------------

/* PROPAGAÇAO

Quando um elemento de um evento nao é claramente definido pode haver propagaçao
Ou seja, um outro elemento ativar o evento
Para resolver este problema temos o metodo stopPropagation
*/

//OBS como o container tem uma area ao clicar no botao ele ativa os dois eventos um pela area do container outro pelo click no botao.

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div.btn");

containerBtn.addEventListener("click", () =>{
    console.log("Event 1");
});

btnInsideContainer.addEventListener("click", () => {
    e.stopPropagation(); //com o stopPropagation paramos com a colisao dos dois eventos
    console.log("event 2")
});

//---------------------------------------------

/* AÇOES DEFAULT

Muitos elementos tem açoes padrao no HTML.
Como links que nos levam a outras paginas
Podemos remover isso com ometodo preventDefault;
*/

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("nao alterou a pgaina"); 
})

//---------------------------------------------

/* EVENTOS DE TECLA

Os eventos de tecla mapeiam as açoes no teclado
Temos a disposiçao keyup e keydown;
KEYUP ativa quando a telcoa é solta;
KEYDOWN quando é pressionada
*/

document.addEventListener("keyup", (e)=> { //KEYUP ativa quando a telcoa é solta;
    console.log(`soltou a tecla ${e.key}`)
});

document.addEventListener("keydown", (e)=> {
    console.log(`pressionou a tecla ${e.key}`) //KEYDOWN quando é pressionada
});

//---------------------------------------------

/* OUTROS EVENTOS DE MOUSE

O mouse pode ativar outros eventos;
moousedown: pressionou botao do mouse
mouseup: soltou botao do mouse
dblclick: clique duplo
*/

const mouseEvent = document.querySelector("#mouse");

mouseEvent.addEventListener("mousedown", () =>{ //moousedown: pressionou botao do mouse
    console.log("pressionou o botao")
});


mouseEvent.addEventListener("mouseup", () =>{ //mouseup: soltou botao do mouse
    console.log("soltou o botao")
});

mouseEvent.addEventListener("dblclick", () =>{ //dblclick: clique duplo
    console.log("click duplo no botao")
});

//---------------------------------------------

/* MOVIMENTO DO MOUSE

é possivel ativar um evento a partir da movimentaçao do mouise
o evento é o mousemove
com o objetivo de evento podemos detectar a posiçao do ponteiro do mouse*/

document.addEventListener("mousemove", (e) =>{
    console.log(`no eixo x: ${e.x}`);
    console.log(`no eixo y: ${e.y}`);
})

//---------------------------------------------

/* EVENTO POR SCROOLL

Podemos tamem adicionar um evento ao scroll do mouse/pagina
Isso é feito poelo evneto scroll
podemos determinar que algo aconteça apos chegar numa posiçao escolhida da tela
*/

window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("passamos de 200px")
    }
});

//---------------------------------------------

  /* Eventos por foco
  
  O evento focus é disparado quando focamos em um elemento
  Ja o blur é quando perde o foco do elemento
  estes sao comuns em inputs*/

  const input = document.querySelector("#my-input");

  input.addEventListener("focus", (e) => {
    console.log("entrou no input")
  });

    input.addEventListener("blur", (e) => {
    console.log("entrou no input")
  });

  //---------------------------------------------

  /* Eventos de carregamento de pagina
  
  Podemos adicionar um evento ao carregar a pagina que é o load
  e quando o usuario sai da pagina que é o beforeunload*/ //esse nao é tao usado

  window.addEventListener("load", () => {
    console.log("a pagina carregou")
  });

   window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    e.returnValue = "teste";
  });

  
  //---------------------------------------------

  /* TECnica de debounde
  
  O debounce é uma tecnica utilizada para fazer um evento disparar menos vezes
  isso pouca memoria do usuario, pois talvez nem sempre o evente seja necessario*/

  const debounce = (f, delay) => {
    
    let timeout

    return(...args) =>{
        if(timeout){
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
           f.apply(args); 
        }, delay);
    };
    };

    window.addEventListener("mousemove", debounce(() => {
        console.log("executando a cadams ")
    }, 400 )
);
