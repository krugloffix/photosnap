import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/Features.jsx";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <div className="home">
      <h1 className="visually-hidden">Photosnap homepage</h1>
      <Hero />
      <Stories number={4} />
      <Features number={3} />
    </div>
  );
};

export default Home;
