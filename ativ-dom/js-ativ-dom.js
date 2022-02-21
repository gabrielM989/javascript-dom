const luz = document.getElementById('luz')
const ligar = document.querySelector('.ligar')


ligar.addEventListener('click', function(){ 

 if(luz.style.background){

    luz.style.background = 'url(imagens/lampada-apagada-png.png) '
    luz.style.backgroundRepeat = 'no-repeat'
    luz.style.backgroundSize = '500px 500px'
    luz.style.backgroundPosition = 'center'

   
    console.log(div)

 }else{

    luz.style.background = 'url(imagens/lampada-acesa-png.png) '
    ligar.textContent = 'Desligar'
    luz.style.backgroundRepeat = 'no-repeat'
    luz.style.backgroundSize = '500px 500px'
    luz.style.backgroundPosition = 'center'
   
    console.log(div)
 }
    
})

