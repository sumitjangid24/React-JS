import Usetoggle from './Hook/Usetoggle';

function App() {

  const [value, ToggleValue, Hide, Show] = Usetoggle(true);

  return (
    <>
      <div>

        <button onClick={ToggleValue}>Toggle</button>

        <button onClick={Hide}>Hide</button>

        <button onClick={Show}>Show</button>

        {
          value && <h1>Custom Hook</h1>
        }

      </div>
    </>
  )
}

export default App;