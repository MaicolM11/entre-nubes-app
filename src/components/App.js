import './App.css';

function App() {

  function getData() {
    fetch('/names')
      .then( response => response.json())
      .then((data) => console.log(data))
      .catch(() => alert('Ha ocurrido un error '))
  }

  return (
    <div className="App">
      <h1>Hola mundo!</h1>
      <button onClick={getData}>call api</button>
    </div>
  );
}

export default App;
