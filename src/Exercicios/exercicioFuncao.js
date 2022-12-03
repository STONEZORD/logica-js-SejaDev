// faca uma funcao que verifica se o numero e par 

function par (num) {
  const condicao = num % 2 === 0
  return condicao
}
const ePar = par (55)
//console.log(ePar)

// mostar os numeros pares de 0 a 100


for (let i = 0; i <= 100; i = i + 2 ) {
  if (par(i)) console.log(i)
}