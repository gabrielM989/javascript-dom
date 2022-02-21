const btnToggle = document.getElementById('toggle')


btnToggle.addEventListener('click', function(){

    let alertHTML = document.querySelector('.alert')

   /*  if(alertHTML.classList.contains('mostrar')){ */  /* contains --> Esse método você passa uma String para ver se a classe selecionada existe, no caso, a mostrar */
      /*   alertHTML.classList.remove('mostrar') */ /* remove, remove a classe existente */
    /* } else{ */
      /*   alertHTML.classList.add('mostrar')
     }*/

     alertHTML.classList.toggle('mostrar') /* O método "toggle" já faz todo o processo do if e else, do adicionar e remover */


    console.log(alertHTML.classList) /* classList retorna todas as classes existentes */
})


console.log(btnToggle)