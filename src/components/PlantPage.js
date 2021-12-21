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

  let plantsToDisplay = [...plants]
  plantsToDisplay = plantsToDisplay.filter(plant => plant.name.includes(search) || plant.name.toLowerCase().includes(search) || plant.name.toUpperCase().includes(search))

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
    }

  return (
    <main> 
      <NewPlantForm newPlant={newPlant} setNewPlant={setNewPlant} onAddPlant={onAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plantsToDisplay = {plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
