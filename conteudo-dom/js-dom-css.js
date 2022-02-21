let btn = document.querySelector('.btn')

/* btn.addEventListener('click', function(){ */ /* Esse método adiciona "ouvidor de eventos", vai "escutar" determinado evento, no caso, o "click" */
/* o método(addEventListener) está recebendo parâmetros "function(){"*/
/* método/funcao --> são comandos que executam vários outros comandos, os quais iremos defini */
/* o "btn" é o objeto */

/* }) */ 

btn.addEventListener('click', () => { /* uma função curta --> arrow */

    alert('Você clicou neste botão')

    document.body.style.background = 'red' /* para alterar as cores, após clicar no botão, basta ir "acessando o mesmo", através dos pontos. */

})

console.log(btn)