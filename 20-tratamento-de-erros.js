const API_URL = "https://jsonplaceholder.typicode.com/userss" //simulando error no userss com dois s

const getUsers = async () => {
try {
  const response = await fetch(API_URL)
  if (response.status === 404) throw new Error ("NAO ENCONTRADO")
  const data = await response.json()
  const emails = data.map(({email}) => ({ email }))
  console.log(emails)
  } catch (error) {
  console.log(error.message)
  }
}
getUsers()
