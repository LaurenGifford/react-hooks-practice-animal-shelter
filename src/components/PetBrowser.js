import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const renderPets = pets.map(pet => (
    <Pet
    key={pet.id}
    name={pet.name}
    age={pet.age} 
    weight={pet.weight}
    type={pet.type}
    isAdopted={pet.isAdopted} 
    gender={pet.gender} 
    id={pet.id}
    onAdoptPet={onAdoptPet}
    />
  ))
  return (
  <div className="ui cards">{renderPets}</div>
  );
}

export default PetBrowser;
