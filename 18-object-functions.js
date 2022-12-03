/*const pessoa = {
  name: "Lucas",
  sobrenome: "Melo",
  //chave       valor
}
*/
/*
[["name", "Lucas"] ["lastName", "Melo"]]
*/

//Object.keys(): Cria um array com todas as chaves do objeto
//console.log(Object.keys(pessoa))

//Object.values(): Cria um array com todas os valores do objeto
//console.log(Object.values(pessoa))

//Object.entries(): Cria um array com todas as chaves e os valores do objeto
//console.log(Object.entries(pessoa))

const livros = {
  'Livro A': 19.90,
  'Livro B': 20.00,
  'Livro C': 25.00,
}
const values = Object.values(livros)
//console.log(values)
const sum = values.reduce((val, acc) => {
  return val + acc
}, 0)
console.log(sum)

