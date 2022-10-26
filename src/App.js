import { useState } from "react";

function App() {
  const [excuse, setExcuse] = useState("");
  const generateExcuse = (place) => {
    fetch(`https://excuser.herokuapp.com/v1/excuse/${place}/`)
      .then((res) => res.json())
      .then((data) => {
        setExcuse(data[0].excuse);
        console.log(data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1>Generate Excuse</h1>
      <button onClick={() => generateExcuse("party")}>Party</button>
      <button onClick={() => generateExcuse("family")}>Family</button>
      <button onClick={() => generateExcuse("office")}>Office</button>
      <h2>{excuse}</h2>
    </div>
  );
}

export default App;
