import Card from "./component/Card";


function App() {


  return (
    <>
      <div className='container'>
        <Card name="Sumit" age={"20"} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W5se-3sXcI-CuvSm5GbPoSk655stnvqEeWyX1M79KA&s=10" />
        <Card name="Yash" age={"21"} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoe3tPGihp_1UammQDxZFpv4Fzqw31qirEf_9fmQvMw&s=10" />
        <Card name="Ravi" age={"21"} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzJiL2savWoGa11xgA0dE_0XjhbdeZokBLo_dScmZJKg&s=10" />
      </div>
    </>
  );

}

export default App
