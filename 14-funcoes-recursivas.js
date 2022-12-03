/* crie um algoritimo p calc o fatorial de um numero N

2! = 2 * 1 
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
*/

function fatorial (n) {
  if (n <= 2 ) return n
  return fatorial (n - 1) * n
}

const numero = 5
const resposta = fatorial(numero)
console.log(resposta)

/* 
n = 5
fatorial (5) = fatorial (4) * 5 
n = 4
fatorial (4) = fatorial (3) * 4 
n = 3
fatorial (3) = fatorial (2) * 3 
n = 2
fatorial (2) = 2
*/