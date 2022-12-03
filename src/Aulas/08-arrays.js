/*//forma de criar listas declarada por []
const variavel = 2 + 2
let array = [true , false, 0 , 1 , 2 , variavel]
array[0] = false // os valores podem ser editados
array[6] = true // os valores podem ser adicionados
array.push(1000, true , "string") // valores podem ser adicionados, inclusive mais de um valor
array.pop() //remove o ultimo elemento do array
console.log(array)
console.log(array.length)*/

let newArray = [10 , 20 , 30]
let i = 0 //posicao do array no caso 0=10
while (i < newArray.length) { //length tamanho no caso 3 arrays 
  //console.log(i)
  //console.log(newArray[i])
  i++
}

for (let pos = 0; pos < newArray.length; pos ++ ) {
  //console.log(newArray[pos])
}
 //for in 
for (let pos in newArray) {
  //console.log(pos)
  //console.log(newArray[pos])
}

for (let arr of newArray) {
  console.log(arr)
}