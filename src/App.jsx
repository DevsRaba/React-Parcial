import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <div>
      <Header/>
    </div>
      <div className="App">
        <h1>Carga de estudiantes</h1>
        <Card name="UNO" />
        <Card name="DOS" />
        <Card name="TRES" />
        <form>
          <input type="text" name="Que piensas?" id="" />
          <input type="button" value="Boton" />
        </form>
      </div>
    </>
  );
}

export default App;
