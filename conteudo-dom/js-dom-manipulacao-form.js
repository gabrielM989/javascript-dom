const mainForm = document.querySelector('#main-form')
const iUsername = document.getElementById('username')
const iEmail =  document.getElementById('email')
const iPass1 = document.getElementById('pass1')
const iPass2 = document.getElementById('pass2')

mainForm.addEventListener('submit', function(event){ /* evento "submit, do formulário" */

event.preventDefault() /* impede que seja enviado sem dados */
event.stopPropagation() /* se não evitarmos a propagação dos dados, iremos perdê-los*/

if(iUsername.value.length == 0 || iEmail.value.length == 0 || iPass1.value.length == 0 || iPass2.value.length == 0){

    alert('Dados insuficientes para o cadastro. Verifique os dados e tente novamente')

}else if (iPass1.value === iPass2.value) {
    alert('Formulário enviado')
}else{
    alert('As senhas são diferentes. Verifique os dados e tente novamente')
}

})
