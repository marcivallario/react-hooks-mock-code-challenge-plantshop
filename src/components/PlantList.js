import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantsToDisplay, handleDelete }) {
  return (
    <ul className="cards">{plantsToDisplay.map(plant => {
      return <PlantCard key={plant.id} plant={plant} handleDelete={handleDelete}/>
    })}</ul>
  );
}

export default PlantList;
