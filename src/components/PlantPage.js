import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');
  const [newPlant, setNewPlant] = useState({
    name: '',
    price: 0,
    image: ''
  });

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlants(data))
  }, [])

  let plantsToDisplay = plants.filter(plant => plant.name.includes(search) || plant.name.toLowerCase().includes(search) || plant.name.toUpperCase().includes(search))

  function onAddPlant(newPlantObj) {
    fetch('http://localhost:6001/plants', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlantObj),
      })
      .then(resp => resp.json())
      .then(data => {
        const newPlantArr = [...plants, data]
        setPlants(newPlantArr);
      })
    setNewPlant({
      name: '',
      price: 0,
      image: ''
    })
    }

  function onDeletePlant(id) {
    console.log(id);
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE'
    })
    setPlants(plants.filter(plant => plant.id !== id))
  }

  return (
    <main> 
      <NewPlantForm newPlant={newPlant} setNewPlant={setNewPlant} onAddPlant={onAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plantsToDisplay={plantsToDisplay} handleDelete={onDeletePlant}/>
    </main>
  );
}

export default PlantPage;
