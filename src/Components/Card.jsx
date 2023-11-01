const Card = ({name}) => {
  console.log(name);
  return (
    <div style={{color: "black", backgroundColor: "gray"}}>
      <h3>Hola, soy la tarjeta {name}</h3>
      <hr />
    </div>
  );
};

export default Card;
