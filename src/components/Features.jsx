import React from "react";
import { features } from "./features";

const Features = ({ number }) => {
  const newFeatures = features.slice(0, number);

  return (
    <div className="features">
      <h2 className="visually-hidden">Photosnap features</h2>
      <div className="container features__container">
        <ul className="features__list">
          {newFeatures.map((obj) => (
            <li className="features__item" key={obj.id}>
              <img src={obj.img} alt={obj.title} className="features__img" />
              <h3 className="features__title">{obj.title}</h3>
              <p className="features__text">{obj.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
