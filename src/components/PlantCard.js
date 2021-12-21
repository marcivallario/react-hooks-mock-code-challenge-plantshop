import React, { useState } from "react";
// import PlantList from "./PlantList";

function PlantCard({plant, handleDelete}) {

  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((toggle) => !toggle);
  }

  function handleClickDelete() {
    handleDelete(plant.id);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {toggle ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button id={plant.id} onClick={handleClickDelete}>DELETE</button>
    </li>
  );
}

export default PlantCard;
