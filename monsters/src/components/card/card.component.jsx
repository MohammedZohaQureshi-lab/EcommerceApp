import React from "react";
import "./card.style.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="robo img"
        src={`https://robohash.org/${props.monster.id}?set=set3$size=100x100`}        
      />
      <h3>{props.monster.name}</h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
