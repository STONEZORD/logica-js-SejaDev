/* crie um algoritimo p calc o fatorial de um numero N

2! = 2 * 1 
3! = 3 * 2 * 1
4! = 4 * 3 * 2 * 1
*/
function fatorial(n) {
  let i = n
  let fatorial = 1
  while (i >= 2) {
    fatorial = fatorial * i
    i--
  }
  return fatorial
}

const number = 5
const resposta = fatorial(number)
console.log(resposta)

/*
n = 5:
reposta= 5 
n = 4
resposta = 5 * 4
n = 3 
resposta = 5 * 4 * 3
n = 2 
resposta = 5 * 4 * 3 * 2
n = 1
retorna resposta   
*/
