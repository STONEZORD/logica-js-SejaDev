/*const {parametros} = variavel*/
const pessoa = {
  nome: "Lucas",
  sobrenome: "Melo",
  idade: 25,
  senha: "123"
}

const {nome, sobrenome , idade} = pessoa // destructor dentro da chaves cria uma constante
//const nome = pessoa.nome
//const sobrenome = pessoa.sobrenome
console.log(nome)
console.log(sobrenome)
console.log(idade)

//add dados
const pessoaAtt = {
  ...pessoa,
  senha: 321
}
console.log(pessoaAtt)

// Serve pra Array

/*const array = [1 , 2 ,3 ,4]
const [a , b] = array
//console.log(a) pega o valor de 1 
//console.log(b) pega o valore de 2

const newArray = [0, ...array, 5]
console.log(newArray)
*/