import React from "react";
import { Link } from "react-router-dom";

const Prefooter = () => {
  return (
    <div className="prefooter">
      <div className="prefooter__overlay"></div>
      <div className="container prefooter__container">
        <h2 className="prefooter__title">
          We're in beta. Get your invite today!
        </h2>
        <Link to={"/"} className={`arrow__btn arrow__btn--white hero__link`}>
          get an invite
        </Link>
      </div>
    </div>
  );
};

export default Prefooter;
