/* O que é Orientaçao a objetos?
Um paradigma de programaçao, uma outra forma de programar.
Utilizando objetos como seu principal principio;
A maioria dos sftwares é desenvolvido neste paradigma;
Frameworks e bibliotecas de fornt-end também sao desenvolvidos com POO.
Estavamos desenvolvendo no modo procedural. */

// ------------------------------------

/* METODOS

Metodos podem ser adiconados ao objetos,
Eles sao como propriedades, mas contem uma funçao
invocamos os metodos do mesmo modo que funçoes */

const animal = {
    /*O que são métodos em POO?
    Métodos são funções que pertencem a um objeto ou classe.
    Ou seja:
    Método = função dentro de um objeto/classe */

    nome: "bob",
    latir: function(falar){ /*falar é o parametro
        ✅ Forma fácil de lembrar:
        Parâmetro → espaço para receber o valor
        Argumento → valor que você envia*/
       return falar
    },
};

console.log(animal.nome);
console.log(animal.latir("auau"));

// ------------------------------------

/* Aprofundando em metodos 
Os metodos sao utilizados para interagir tambem com as propriedades do seu objeto.
podemos exibir elas ou modifica-las
podemos nos referenciar com o proprio objeto com as palavra this*/

const pessoa = {
    nome: "thiago",
    getNome: function(){
        return this.nome
    },
    setNome: function(novoNome){
        this.nome = novoNome;
    },

}

console.log(pessoa.nome);
console.log(pessoa.getnome);

pessoa.setNome("Sheyla");
console.log(pessoa.getNome);

// ------------------------------------

/* Sobre o prototype
Prototype é um recuros que faz parte da arquitetura de javaScript
É uma especie de herança, onde objetos pais herdam propriedades e metodos aos filhos
Por isso muitos dados sao considerados objetos e temos objetos, como: STRING, NUMBER e outros
Ou seja, cada dado tem um obejto pai herdou caracteristicas pelo prototype*/

/* O recurso fundamental do prototype que temos que entenderé o fallback;
Quando uma propriedade nao existe em um dado/objeto, ela é procurada no seu ancestral;
ou seja, é por isso que temos acesso a length em strings, por exemplo */

const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(Object.getPrototypeOf(arr))

// ------------------------------------

/* MAIS SOBRE PROTOTYPE
NAO É UM METODO TAO UTILIZADO HOJE EM DIA.
Quando criamos um objeto a aprtir de outro sera o prototype do aobjeto criado
Porem tambem herdará caracteristicas do obejto pai, se fort um objeto, herda de obejct:
esta é a cadeia do prototyope */

const myObejct = {
    a: "b",
};

console.log(Object.getPrototypeOf(myObejct));
console.log(Object.getPrototypeOf(myObejct) === Object.prototype);

const mySecundObject = Object.create(myObejct);
console.log(mySecundObject); //estamos criando uma cadeia de prototipe aonde podemos acessar o conteu do myobejct
console.log(mySecundObject.a);
console.log(Object.getPrototypeOf(mySecundObject) === myObejct);
//isso evidencia que o mysecundobj é um objeto pai de um outro objeto pai de myobjeto

// ------------------------------------

/* classes basicas
 
Os prototypes são originados de uma classe;
que é omolde dos objetos, nela definimos os metodos e propriedades.
JavaScript ja possua classes, porem podemos criar as nossas;
isso é essencial para a orientaçao a objetos*/

const cachorro = {
    raca: null,
    patas:4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemao";
console.log(pastorAlemao);

console.log(pastorAlemao.patas);

// ------------------------------------

/* Classes baseadas em funçoes construtoras

Utilizando funçoes como classes, conseguimos iniciar as propriedades com a criaçao do objeto;
chamamos de funçao construtora, este recurso,
o construtor tem como objetivo instanciar um objeto, ou seja criar um novo objeto*/

function criarCachorro(nome, raca, patas){

    const cachorro = Object.create({}) //👉 “Cria um novo objeto cujo protótipo é esse {} vazio”

    cachorro.nome = nome;
    cachorro.patas = patas;

    return cachorro

}

/*parâmetros → recebem os valores

propriedades → armazenam os valores no objeto

= → faz a atribuição */

const bob = criarCachorro("bob", "vira-lata");
console.log(bob)

// ------------------------------------

/* CLASSES BASEADAS EM FUNÇOES.

este recurso é semelhando ao anterior, mas com um nova palavra chase =new
em varias linguagens o new é utilizado para instanciar novos objetos, em JS isso tambem acontece
eles podem partir de funçoes*/

function Cachorro(nome, raca){ //quando eu começo com maiusculo no JS ja identifica com uma class

    this.nome = nome;
    this.raca = raca;
}

const husk = new Cachorro("betovew","husk");
console.log(husk);

// ------------------------------------

/*  CLASSES DE FUNÇOES COM METODOS
Para adicionar metodos antes da craçao do objeto
podemos acessar o prototype e coloca-los lá
esta é basicamente a essencia de javaScript;
porem com a evoluçao da linguagem, outros recursos foram craidos, é oque veremos nas proximas aulas */

//adicionando metodos
Cachorro.prototype.uivar = function(){ //criei uma novo metodo
    console.log("auuu")
};
console.log(cachorro.prototype);
husk.uivar();

// ------------------------------------

/* Classes ES6
Nas vesoes mais atuais de JS abandonamos as functions e utilizamos as classes
aqui temos recursos comuns em outras linguagens como o constructor.
alem da instacia por new
 */

 //nova maneira de criar objetos em javascript
class CachorroClass{
    constructor(nome,raca){
        this.nome = nome;
        this.raca = raca;
    }
}

/*  ✅ Variáveis (propriedades do objeto): 
    ✅ Parâmetros: Eles são valores que você vai passar quando criar o objeto.
    ✅ Nome da classe: Esse é o “molde” (tipo uma forma de criar objetos).
    👉 Métodos são funções que ficam dentro de um objeto ou classe
    🧠 Frase que fecha tudo:

👉 Parâmetro entra → propriedade guarda → método executa.
    
    class CachorroClass {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }

    latir() {
        return "au au";
    }
}*/
    

const jeff = new CachorroClass("rodolfo", "pistola");
console.log(jeff);
console.log(Object.getPrototypeOf(CachorroClass));

// ------------------------------------

/* Mais sobre class
Não podemos adicionar propriedade diretamente as classes
isso precisa ser feito ao inicia-la ou via prototype;
metodos da classe tambem podem utilizar this para se referor ao obejto instanciado
os metodos nao precisam da palavra function */

class Caminhao{
    constructor(eixo, cor){
        this.eixo = eixo;
        this.cor = cor;
    }

    descrevendoCaminhao (){ //metodo dentro de uma class
        console.log(`este caminhao tem ${this.eixo} e é da cor: ${this.cor}`);
    }
}

const scania = new Caminhao(6,"preto");
console.log(scania);
scania.descrevendoCaminhao();


Caminhao.prototype.motor = 4.0; //adcionando propriedade
const c3 = new Caminhao(6,"azul");
console.log(c3.motor);

// ------------------------------------

/* Substituindo propriedade pelo prototype
As instancias dos objetos sao cradas baseadas nas classes
OU seja, as propriedades tem os valores definidos no construtor ou por metodos;
para altera-los podemos utilizar o prototype */

class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

/* 
🔍 Ordem de busca (muito importante):

Procura no objeto (thiago)

Se não achar → procura no prototype */

const thiago = new Humano("Thiago", 29);
console.log(thiago);

Humano.prototype.idade = "nao definada";
console.log(thiago.idade); //alterar apenas o prototype que origina os objetos
console.log(thiago.prototype.idade);

/* Symbols em classes
Quando utilziamos o recurso de symbol com classe é possivel crair uma propriedade unica e umutavel.
isso é util quando há algum dado que se repetira em todos os objetos crados a partir da classe
 */

class Aviao{
    constructor(marca, turbina){
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol()

Aviao. prototype[asas] = 2;
Aviao. prototype[pilotos] = 2;

const boieng = new Aviao("boieng", 10);
console.log(boieng);
console.log(boieng[asas]);
console.log(boieng[pilotos]);