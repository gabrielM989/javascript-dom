const bin = prompt('Digite um número binário')// 00101 // 4 + 0 + 1 = 5
/* const arr = bin.split('').reverse() */ /* split corta o array, conforme o que definirmos, no caso, cada caractere da String, tornará um Array e depois está invertendo*/

/* let decimal = 0

arr.forEach(function(value, index){

if (value !== '0'){
    decimal += 2 ** index
}
}) */




const dec = eval(`0b${bin}`) /* eval é ele interpreta o que está escrito no javascript e faz para nós*/


console.log(dec)