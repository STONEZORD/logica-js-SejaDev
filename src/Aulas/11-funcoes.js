/*function nomeDaFuncao (paramentro) {
}

function ola () {
  console.log("OLA")
  console.log("OLA") // x imprimidas
}
ola() //chama o pedaco do codigo

function ola () {
  return "ola" //deliita o fim da funcao
  console.log("nao chega aqui")
}

const variavel = ola() //atribui o valor da var ao retorno da funcao
console.log(variavel) //() chama a funcao se n tiver () chama o valor da var
*/

function soma (A , B) {
 return A + B
}

function calculadora () {
  const A = 1
  const B = 2
  const R = soma (2, 3)
  return R
}
const resultado = calculadora ()
console.log(resultado)