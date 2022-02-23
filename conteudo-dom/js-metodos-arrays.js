const numeros = [10, 36, 55, 89, 75, 12, 38, 13] /* formação de um array */

let soma = 0

numeros.forEach(function(x){ /* forEach --> tradução: para cada, para cada valor do meu array, faremos uma coisa */ /* não pode ter retorno! */
/* É como se fosse o for of, o forEach não tem retorno, tendo em vista que ele consome os dados, no caso, através da function, para a Array */
/* É um método do array */
soma += x /* Somou todos os valores do array */

}) 

console.log(soma)

/* for(let i of numeros){
    O forEach tem o mesmo conceito, é uma estrutura do Javascript
} */

let novoArray = numeros.map(function(x, index){/* o map --> mapeia os valores do Array e nos retorno novos valores, basicamente, irá nos retornar um novo Array */

    console.log(`Valor na posição ${index}: ${x}`)
    return x ** 3 /* Vai pegar cada valor do Array e elevar ao cubo */

}) 
console.log(novoArray)

let outroArray = numeros.filter( (x) => { /* O filter --> faz uma filtragem nos dados, nos retornando os dados que solicitamos */

if(x % 2 == 0){ /* aqui, está retornando apenas os valores pares */
    return x
}

})

console.log (outroArray)

let temAlgumNumero = numeros.some(function(x){ /* retorna um valor booleano, verdadeiro ou falso, tem que ser pelo menos um valor satisfazer */

    return x == 50
}) 

console.log(temAlgumNumero)

let condicao = numeros.every((x) => { /* todos os elementos do Array precisam satisfazer essa condição */

    if( x > 5){
    return true
    }

})

console.log(condicao)

const resultadoFinal = numeros.reduce(function(x, y){  /* aqui precisamos usar dois parâmetros, o primeiro é o valor anterior e o segundo o atual */
console.log(`Valor de X = ${x}; Valor de Y = ${y}`)

return x * y /* multiplica cada valor do Array */

})
console.log(resultadoFinal)