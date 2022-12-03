// const variavel = (parametro) => {}

function ola () {
  console.log("OLA")
}
ola()

const arrowOla = () => {
  console.log("arrowOla")
}

/*const soma = (A , B) => {
 return A + B
}

console.log(soma (10 , 20))*/

// a funcao for enxuta e simples pode eliminar {} e return 

const soma = (A , B) =>  A + B
console.log(soma (10 , 20))


const ePar = (num) => num % 2 === 0 
console.log(ePar(2))
console.log(ePar(3))