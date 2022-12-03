/*Neste problema, deve-se ler 
o código de uma peça 1, 
o número de peças 1, 
o valor unitário de cada peça 1, 
o código de uma peça 2, 
o número de peças 2 e 
o valor unitário de cada peça 2. 
Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, 
respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, 
lembrando de deixar um espaço após os dois pontos e um espaço após o "R$".
O valor deverá ser apresentado com 2 casas após o ponto.*/


let cod1 = 12
let num1 = 1
let val1 = 5.30
let cod2 = 16
let num2 = 2
let val2 = 5.10
let total = (num1 * val1) + (num2 * val2)

console.log("TOTAL = ", total.toFixed(2))
