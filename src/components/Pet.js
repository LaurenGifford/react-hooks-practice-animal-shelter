import React from "react";

function Pet({name, age, weight, type, isAdopted, gender, id, onAdoptPet}) {
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {name}
          {gender === "female" ? '♀' : '♂'}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? 
          <button className="ui disabled button">Already adopted</button> :
          <button 
          onClick={() => onAdoptPet(id)}
          className="ui primary button">Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
