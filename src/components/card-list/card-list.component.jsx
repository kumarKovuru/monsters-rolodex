import React from "react";
import "./card-list.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((Monster) => (
        <h1 key={Monster.id}> {Monster.name}</h1>
      ))}
    </div>
  );
};
