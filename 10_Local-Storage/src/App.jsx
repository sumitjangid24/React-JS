function App() {
  // let name = "sumit"
  // name = "Jangid"
  // localStorage.setItem("name", "sumit")
  // localStorage.setItem("name", "Jangid")
  // console.log(name);


  // GetItem

  // const name = localStorage.getItem("name")
  // console.log(name);

  // Remove Item
  // const name = localStorage.removeItem("name")
  // console.log(name);

  // Data store in Object

  const user = {
    name: "Sumit",
    City: "Ajmer"
  }
  localStorage.setItem("user", JSON.stringify(user))
  const users = JSON.parse(localStorage.getItem("user"))

  console.log(users);



  return (
    <>


    </>
  )
}
export default App


