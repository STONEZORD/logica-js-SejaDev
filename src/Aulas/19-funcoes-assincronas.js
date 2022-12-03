//buscar dados e conectar o back
/*const API_URL = "https://jsonplaceholder.typicode.com/users" // busca a url no backend

async function getUsers () { 
const response = await fetch(API_URL) 
const data = await response.json()
console.log(data)
}

getUsers()
 //async espera a resposta
 //fetch busca os dados
 //await espera ate ter a resposta*/
 
 const API_URL = "https://jsonplaceholder.typicode.com/users" // busca a url no backend

async function getUsers () { 
const response = await fetch(API_URL) 
const data = await response.json()
console.log(data)
}

getUsers()

//olhar todos os objetos dentro dos dados
/*data.forEach (() => {
 console.log(obj)
  })
}*/

//olhar todos os emails dentro dos dados

/*const userEmails = data.map((obj) => {
return {
email: obj.email
}
})
console.log(userEmails)
}

//forma mais enxuto 
const userEmails = data.map(({email}) => 
({email})
)
console.log(userEmails)
}

getUsers()
*/