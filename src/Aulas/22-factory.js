function Pessoa (nome, sobrenome) {
  let pessoa = {
    nome,
    sobrenome
  }
  pessoa.nomeCompleto = `${nome} ${sobrenome}`
  return pessoa
}

const pessoaA = Pessoa("Lucas", "Melo")
const pessoaB = Pessoa("Pessoa", "Teste")

console.log(pessoaA, pessoaB)
console.log(pessoaA.nomeCompleto)               