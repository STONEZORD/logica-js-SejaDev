//Questao 1

//dado um array com X numeros , encontrar a media  desses numeros
//media = (soma dos elementos ) / tamanho

/*const numbers = [ 10 , 20 , 30 , 40 , 80]
let sum = 0
for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length

console.log(media)*/


//Questao 2

/* A prefeitura poossui uma lista com a idade de cada morador e quer saber a
a quantidade de moradores que sao eleitores
obrigatorios, facultativos ou nao eleitores de acordo com as 
informaçoes abaixo:

obrigatorio: entre 18 e 69
facultativo: entre 16 e 17 e acima de 70
nao eleitor: abaixo de 16*/

/*const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]

let obrigatorio = 0
let facultativo = 0
let naoEleitor = 0

for (let idade of lista) {
  if (idade >= 18 && idade <= 69 ) obrigatorio++ 
  else if (idade <= 16 )  naoEleitor++ 
  else facultativo++
}

console.log("Obrigatorio: ", obrigatorio)
console.log("Facultativo: ", facultativo)
console.log("Nao Eleitor: ", naoEleitor)*/
  