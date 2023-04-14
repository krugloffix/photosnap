import React from "react";
import Features from "../components/Features.jsx";
import Hero from "../components/Hero.jsx";
import Prefooter from "../components/Prefooter.jsx";

const Feature = () => {
  return (
    <div className="feature">
      <h1 className="visually-hidden">Photosnap features</h1>
      <Hero page={"features"} />
      <Features number={6} />
      <Prefooter />
    </div>
  );
};

export default Feature;
