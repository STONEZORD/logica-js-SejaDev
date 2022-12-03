// array.forEach((elemento, posicao) =>{})
// passa por tds elementos do array

const array = [1 ,2 ,3 , 4 ,5 ,6, 7, 8, 9, 10]
array.forEach((elemento, posicao) =>{
  /*console.log(elemento)
  console.log(posicao)*/
  //console.log(`${elemento} - posicao ${posicao}`)
})

//array.find array.find(() => {})
//retorna o elemento

const valor = array.find((elemento) => {
  if (elemento === 1) return true
  return false
})
//console.log(valor)

//findIndex array.findIdex(() => {})
//retorna a posicao do elemento

const newValor = array.findIndex((elemento) => {
  if (elemento === 2) return true
  return false
})
//console.log(newValor)

const index = array.findIndex(elemento => elemento === 2) //forma enxuta , se tiver so um return
//console.log(index)

//array.some(() => {})
// some: pelo menos um nmr satisfaz a condicao

const some = array.some((elemento) => {
  if (elemento >= 10) return true
  return false
})
//console.log(some)

const newSome = array.some(elemento => elemento >= 11) //cod enxuto
//console.log(newSome)

//array.every(() => {})
//every: todos os elementos satisfazem a condicao

const every = array.every((elemento) => {
  if (elemento >= 1) return true
  return false
})
//console.log(every)

const newEvery = array.every(elemento => elemento >= 11) //cod enxuto 
//console.log(newEvery)


const newArray = [10, 20, 30, 40, 50]

//splice: corta o array o primeiro inicio e o segundo quantidade
//console.log(newArray.splice(0, 5))

//map: modificar os valores dentro do array seguindo o array
/*console.log(newArray.map((elemento) => {
  //return 0 
  return elemento * 2
}))*/

//filter: filtra os elementos dentro do array
/*console.log(newArray.filter((elemento) => {
  return elemento % 2 === 0 // retorna todos os pares
  return elemento % 2 === 1 // retorna todos os impares
}))
*/

//reduce: reduz o array para algum outro elemento

console.log(newArray.reduce((acumulado , elemento) => {
  return acumulado - elemento
} , 150)) // valor inicial da soma 