import './App.css';

function App() {

  function getData() {
    fetch('/msg')
      .then( response => response.json())
      .then((data) => alert(data.msg))
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