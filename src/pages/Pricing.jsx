import React from "react";
import Hero from "../components/Hero.jsx";
import Prefooter from "../components/Prefooter.jsx";
import Compare from "../components/pricing/Compare.jsx";
import Price from "../components/pricing/Price.jsx";

const Pricing = () => {
  return (
    <div className="pricing">
      <h1 className="visually-hidden">Photosnap pricing</h1>
      <Hero page={"pricing"} />
      <Price />
      <Compare />
      <Prefooter />
    </div>
  );
};

export default Pricing;
