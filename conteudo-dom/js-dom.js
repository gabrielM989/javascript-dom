const botao = document.getElementsByTagName('button')[0]  /* abre e fecha parênteses, porque retorna um pseudo "array", e informamos a posição que queremos */
/* Isso é um método/função, por estar dentro de um objeto/classe(document.), pegando os elementos com o nome: .... */
/* o document é um objeto que serve para mexer na DOM */
/* procura todas as tags no HTMl que são botões, esse método nos retorna um pseudo "Array"(conjunto de dados) */

console.log(botao)

botao.onclick = function(){   /* variáveis podem receber como valor funções, no caso, uma anônima! */

alert('Você clicou em mim')  /* está chamando o atributo "onclick" e está executando uma função anônima */

}

const botao2 = document.getElementsByClassName('meu-btn')  /* pegará todos os elementos daquela mesma classe, independentemente se for botão ou um parágrafo */

console.log(botao2)

const botao3 =  document.getElementsByName('btn') /* O Tag vai procurar o nome da TAG, já o ByName, pesquisa todos os elementos que tenha o mesmo atributo NAME  */
/* Olha o atributo "name", do HTML */
console.log(botao3)

const botao4 = document.getElementById('unico') /* quando quisermos um elemento específico, inserimos um ID, porque o torno um campo único */
console.log(botao4)

let botao5 = document.querySelector('.meu-btn2') /* faz basicamente o mesmo trabalho dos outros, procura elementos do HTML, que possuam a classe btn2, através do "." */ 
/* Ele retorna sempre o primeiro elemento que encontrar no HTML, cuja classe seja btn2, no caso */
/* Caso queiramos buscar um id, devemos colocar a #, antes */
console.log(botao5)

let botao6 = document.querySelectorAll('.meu-btn2') /* agora ele retornar um Array, através do SelectorAll */
console.log(botao6)