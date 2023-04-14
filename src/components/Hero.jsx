import React from "react";

import featuresDesktop from "../assets/features/desktop/hero--desktop.png";
import featuresTablet from "../assets/features/tablet/hero--tablet.png";
import featuresMobile from "../assets/features/mobile/hero--mobile.png";
import pricingDesktop from "../assets/pricing/desktop/hero--desktop.png";
import pricingTablet from "../assets/pricing/tablet/hero--tablet.png";
import pricingMobile from "../assets/pricing/mobile/hero--mobile.png";

export const Hero = ({ page }) => {
  const content = [
    {
      id: 0,
      title: "features",
      text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
      imgDesktop: featuresDesktop,
      imgTablet: featuresTablet,
      imgMobile: featuresMobile,
      alt: "Person holding camera",
    },
    {
      id: 1,
      title: "pricing",
      text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
      imgDesktop: pricingDesktop,
      imgTablet: pricingTablet,
      imgMobile: pricingMobile,
      alt: "Woman takes photos of sunset",
    },
  ];

  const id = page === "features" ? 0 : 1;

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__descr">
          <h3 className="hero__title">{content[id].title}</h3>
          <p className="hero__text">{content[id].text}</p>
        </div>
        <div className="hero__img">
          <picture>
            <source media="(max-width: 425px)" srcSet={content[id].imgMobile} />
            <source media="(max-width: 768px)" srcSet={content[id].imgTablet} />
            <img src={content[id].imgDesktop} alt={content[id].text} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Hero;
