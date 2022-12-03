const limite = 50
const valorDaMulta = 4
const pesoDePeixes = 60

let excesso = pesoDePeixes > limite ? pesoDePeixes - limite : 0
let multa  


/*if ( pesoDePeixes > limite) {
  excesso = pesoDePeixes - limite
} else {
  excesso = 0
}*/
multa = excesso * valorDaMulta
console.log('Excesso: ', excesso)
console.log('Multa: R$', multa)

