import { useState } from 'react'

function App() {

  const [Name, setName] = useState("")
  const [Lastname, setLastname] = useState("")

  const [SubmitName, setSubmitName] = useState("")
  const [SubmitLastname, setSubmitLastname] = useState("")

  function handlesubmit(e) {
    e.preventDefault()

    setSubmitName(Name)
    setSubmitLastname(Lastname)
    console.log(Name);
    console.log(Lastname);

  }

  return (
    <>
      <div className="container">

        <form onSubmit={handlesubmit}>

          <h2>Login Form</h2>

          Enter FirstName:
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />

          Enter LastName:
          <input
            type="text"
            value={Lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <br /><br />

          <button type="submit">
            Submit
          </button>

          <p>First Name: {SubmitName}</p>
          <p>Last Name: {SubmitLastname}</p>

        </form>

      </div>
    </>
  )
}

export default App