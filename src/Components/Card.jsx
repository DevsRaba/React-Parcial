import React from "react";

const Card = ({ name, breed }) => {
  return (
    <div className="card">
      <h2>Datos de la mascota</h2>
      <p>
        <strong>Nombre:</strong> {name}
      </p>
      <p>
        <strong>Raza:</strong> {breed}
      </p>
    </div>
  );
};

export default Card;
