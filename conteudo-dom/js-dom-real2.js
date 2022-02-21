const btn = document.getElementsByTagName('button') [0]
const divParagrafos = document.getElementById('paragrafos')

console.log(btn)
console.log(divParagrafos)

btn.addEventListener('click', function(){

    let p = document.createElement('p') /* cria um elemento HTML, no caso, será parágrafos */

    p.innerText = 'Oláaa, tudo bem com vocês' /* Ele faz realizar a criação de textos */

    divParagrafos.appendChild(p) /* Conseguimos inserir um elemento dentro do outro */

    console.log(p)

})