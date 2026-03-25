//AULA 1 MOVENDO-SE PELO DOM
console.log(document.body);
console.log(document.body.childNodes[1]);

/* Você está dizendo:

👉 "Me dá o segundo nó filho dentro do <body>"

Porque:

[0] = primeiro filho
[1] = segundo filho
[2] = terceiro filho
etc... */

console.log(document.body.childNodes[1].childNodes);

/* 📌 Primeiro: o que é childNodes?
childNodes é uma lista de todos os filhos de um elemento no DOM.
Inclui:
elementos HTML (<div>, <p>, etc.)
textos (inclusive espaços e quebras de linha 😬)
comentários
*/

//----------------------------------------------------------
/* SELECIONANDO ELEMENTOS

Temos varias formas de selecionar especificamente um elemento, ou um conjunto deles;
A diferença entre eles é a forma de seleçao, que pode ser por: class, id, seletor de css;
Alguns exemplos sao: 
gerElementsByTagName, getElementByid, querySelector
*/

//----------------------------------------------------------

/* Encontrando elemento por tag

Com o metodo getElementsByTagName selecionamos um conjunto de elementos por uma tag em comun;
O argumento é uma string que leva a tag a ser selecionada
*/

const listItens = document.getElementsByTagName("li")
console.log(listItens);

//----------------------------------------------------------

/*ENCONTRANDO ELEMENTOS POR ID

Com o metodo getElementById selecionamos um unico elemento, ja que o id é unico na pagina
O argumento é uma strign que leva o id a ser selecionado
*/

const title = document.getElementById("title")
console.log(title);

//----------------------------------------------------------

/* ENCONTRANDO ELEMENTOS POR CLASSE

Com o metodo getElementsByClassName selecionamos um conjunto de elementos por uma classe em comum;
O argumento é uma string que leva a classe a ser selecionada
*/

const products = document.getElementsByClassName("products");
console.log(products)


//----------------------------------------------------------

/* ENCONTRANDO ELEMENTOS POR CSS

Com o metodo querySelectorAll selecionamos um conjunto de elementos por meio de um seletor de CSS;
E com o querySelector apenas um elemnto, com base tambem um seletor de css;
*/

const productsQuerry = document.querySelectorAll(".product");
console.log(productsQuerry);

const mainContainer = document.querySelector("#main-container"); //selecionando somento um elemento
console.log(mainContainer)

//----------------------------------------------------------

/* ALTERANDO O HTML

Podemos mudar praticamente toda a pagina com DOM
Adicionar, remover e até clonar elementos;
Alguns metodos muito utilizados sao: insertBefore, appendChild, replaceChild
*/

const p = document.createElement("p");
console.log(p);

const header = title.parentElement;
/*const title = document.getElementById("title") --- essa foi a consulta que ja fiz la em cima
console.log(title);
 */

header.insertBefore(p, title);

//----------------------------------------------------------

/* Alterando o html com appendChild

Com o appendChild é possivel adicionar um elemento dentro de outro;
Este elemento adcionando sera o ultimo elemento do elemento Pai*/

const navlinks = document.querySelector("nav li");
//👉 Esse seletor "nav li" significa: "Pegue o primeiro <li> que está dentro de um <nav>"
const li = document.createElement("li")
navlinks.appendChild(li)

/* 

Se a ideia é adicionar um novo item na lista:

const navlinks = document.querySelector("nav ul");
const li = document.createElement("li");
li.textContent = "Contato";
navlinks.appendChild(li); 

<ul>
  <li>Home</li>
  <li>Sobre</li>
  <li>Contato</li> ✅
</ul>*/

//----------------------------------------------------------

/* ALTERANDO O HTML COM REPLACECHILD 

ja o metodo replaceChild é utilizado para trocar im elemnto;
Novamento precisamos do elemento pai
*/

const h2 = document.createElement("h2");
h2.textContent = "Meu novo titulo!";
header.replaceChild(h2, title /* elemento que vai ser trocado*/) //const header = title.parentElement; ja puxei o header antes

//----------------------------------------------------------

/* CRIANDO NÓS DE TEXTO

Os textos podem ser manipulados com metodos tambem
temos o creteTextNode, que cria um nói de texto*/

const myText = document.createTextNode("Agora vamos colcoar mais um titulo");
console.log(myText);
const h3 = document.createElement("h3");
h3.appendChild(myText)
console.log(h3)
mainContainer.appendChild(h3)

//----------------------------------------------------------

/* Trabalahdno com atributos
Podemos ler e alterar os valroes dos atributos;
Para ler vamos utilizar o metodo getAttribute;
E para altera rutilizamos setAttribute, este leva o noem do atributo e o valro para alterar */

const fisrtLink = navlinks.querySelector("a")
console.log(fisrtLink)
fisrtLink.setAttribute("hrft", "https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/learn/lecture/38440956#questions");
fisrtLink.setAttribute("target","_blank");

//----------------------------------------------------------

/* Altura e largura dos elementos
É possivel tambem pegar valores com altura e largura de elementos
vamos utilizar as propriedade offsetWidth, offsetHeight
Se queremos desconsiderar as bordas, temos clientwidth e clientheight
 */

const footer = document.querySelector("footer");
console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

//----------------------------------------------------------

/* Posiçao do elemento

Com o metodo getClientBoundingRect podemos pegar varios informaçoes do elemtno;
como:posiçao no eixo X, Y, altura, largura e outros*/

const product1 = products[0]
console.log(product1.getBoundingClientRect())

//----------------------------------------------------------

/* Estilo com JS 

Todo elemento possui uma propriedade chamada style
A partir dela conseguimos alterar as regras de css
Note que regras separadas por traço viram camelCase

camelCase é um padrão de escrita de nomes de variáveis onde:

👉 A primeira palavra começa com letra minúscula
👉 As próximas palavras começam com letra maiúscula
*/

/*
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#23132"
mainContainer.style.paddingcolor = "#232"
*/

//----------------------------------------------------------

/* Alerando estilos de HTMLCollection

HTMLCollectiuon aparece quando selecionamos varios elementos de uma vez
Podemos passar por cada um dos elementos com um for of, e estilizar individualmente cada item;*/

for(const li of listItens){
    li.style.backgroundColor = "red"
}