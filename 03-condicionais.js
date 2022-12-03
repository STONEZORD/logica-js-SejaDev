/*
!== Diferente
=== Igual
number('10') força a string ser um nmr
*/
const numero1 = 12
const numero2 = 12
if (numero1 === numero2) {
  console.log("Igual")
  console.log(numero1 + numero2)
}
else  {
  console.log ("Diferente")
  console.log(numero1 + numero2)
}

numero1 === numero2 ? console.log("Igual") : console.log("Diferente") //forma enxuta
