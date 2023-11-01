import React, { useState } from "react";
import Card from "./Components/Card";
import './App';

function App() {
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (petName.length < 3 || /^\s/.test(petName) || petBreed.length < 6) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      // Aquí podrías, por ejemplo, llamar a una función para enviar los datos a un servidor o simplemente mostrar la tarjeta
    }
  };

  return (
    <div className="App">
      <h1>MASCOTAPP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petName">Nombre de la mascota:</label>
          <br />
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="petBreed">Raza de la mascota:</label>
          <br />
          <input
            type="text"
            id="petBreed"
            value={petBreed}
            onChange={(e) => setPetBreed(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p>{error}</p>}
      {petName.length >= 3 &&
        !/^\s/.test(petName) &&
        petBreed.length >= 6 &&
        !error && <Card name={petName} breed={petBreed} />}
    </div>
  );
}

export default App;
