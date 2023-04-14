import React from "react";
import check from "../../assets/check.svg";

export const Compare = () => {
  const compare = [
    { id: 0, title: "UNLIMITED STORY POSTING", basic: 1, pro: 1, business: 1 },
    { id: 1, title: "UNLIMITED PHOTO UPLOAD", basic: 1, pro: 1, business: 1 },
    { id: 2, title: "EMBEDDING CUSTOM CONTENT", basic: 0, pro: 1, business: 1 },
    { id: 3, title: "CUSTOMIZE METADATA", basic: 0, pro: 1, business: 1 },
    { id: 4, title: "ADVANCED METRICS", basic: 0, pro: 0, business: 1 },
    { id: 5, title: "PHOTO DOWNLOADS", basic: 0, pro: 0, business: 1 },
    { id: 6, title: "SEARCH ENGINE INDEXING", basic: 0, pro: 0, business: 1 },
    { id: 7, title: "CUSTOM ANALYTICS", basic: 0, pro: 0, business: 1 },
  ];

  return (
    <div className="compare">
      <div className="container compare__container">
        <h2 className="compare__title">Compare</h2>

        <div className="compare__table">
          <ul className="compare__titles">
            <li>THE FEATURES</li>
            <li>BASIC</li>
            <li>PRO</li>
            <li>BUSINESS</li>
          </ul>
          {compare.map((obj) => (
            <ul key={obj.id} className="compare__list">
              <li>{obj.title}</li>
              <li>
                {obj.basic ? <img src={check} alt="Option is checked" /> : ""}
              </li>
              <li>
                {obj.pro ? <img src={check} alt="Option is checked" /> : ""}
              </li>
              <li>
                {obj.business ? (
                  <img src={check} alt="Option is checked" />
                ) : (
                  ""
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compare;
