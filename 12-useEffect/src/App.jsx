import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [change, setChange] = useState(0);

  // type(1) dependacy 

  useEffect(() => {
    setChange(change + 1)
  }, [number])

  // type (2) Without dependency
  const [render, setRender] = useState(0)
  useEffect(() => {
    // setRender(render + 1)

  })
  // type(3) useeffect with empty dependency
  useEffect(() => {
    console.log("fatching Data...");

  }, [])
  return (
    <div>
      <h3>Counter  is -:  {number}</h3>
      <i>Counter state change in count -:{change}</i><br />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setNumber(number - 1)}>Decrement</button>
      <button onClick={() => setNumber(0)}>Reset</button>

      <br /><br /><br />
      <h4>render -:       {render}
      </h4>
    </div>
  )
}

export default App
