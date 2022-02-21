const div = document.querySelector('#eventos')

div.addEventListener('mouseover', function(){ /* O "mouseover --> faz com que quando o mouse está sobre o elemento, realizei alguma coisa" */

    div.style.background = 'red'  
    div.textContent ='Mouse Over' /* Mudou o texto, quando o mouse ficou em cima */
    console.log(div)

})

div.addEventListener('mouseout', function(){


    div.style.background = 'white'  
    div.textContent ='Mouse Out' /* Mudou o texto, quando o mouse ficou em cima */
    console.log(div)

})

document.addEventListener('keyup', (event) => { /* o keyup + event, "grava" tudo o que você digitar no teclado */

    const eventos = document.querySelector('#eventos2')
    const para = eventos.firstElementChild /* mostra na tela apenas a última tecla que digitou */
    /* const para = document.createElement('p') */ /* ele está criando um parágrafo */

    para.innerText = `Você digitou a tecla: ${event.key}` /* innerText retorna o texto que está dentro do parágrafo */
    eventos.appendChild(para)

    console.log(event.key) /* com o event.key, dá para saber qual é a tecla que o usuário digitou 
     */


}) 