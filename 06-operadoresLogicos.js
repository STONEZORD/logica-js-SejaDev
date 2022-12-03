/* 
OU = ││ - a condição é verdadeira se UM ou OUTRO for verdadeiro
E = && - a condição é verdadeira se TODOS forem verdadeiros. */

/*
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos 
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos 
*/

/*const idade = 24
if (idade >= 5 && idade <= 7 ) {
  console.log("Infantil A")
}
else if (idade >= 8 && idade <= 11 ) {
  console.log("Infantil B")
}
else if (idade >= 12 && idade <= 13 ) {
  console.log("Juvenil A ")
}
else if (idade >= 14 && idade <= 17 ) {
  console.log("Juvenil B")
}
else if (idade >= 18) {
  console.log("Adultos")
}
*/

const idade = 18

if (idade === 5 || idade === 6 || idade === 7) {
  console.log("Infantil A")
}
else if (idade === 8 || idade === 9 || idade === 10 || idade === 11) {
  console.log("Infantil B")
}
else if (idade === 12 || idade === 13 ) {
  console.log("Juvenil A ")
}
else if (idade === 14 || idade === 15 || idade === 16 || idade === 17) {
  console.log("Juvenil B")
}
else if (idade === 18 || idade > 18 ) {
  console.log("Adultos")
}