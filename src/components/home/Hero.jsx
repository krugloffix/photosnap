import React from "react";
import { Link } from "react-router-dom";

import img1Desktop from "../../assets/home/desktop/pic-1--desktop.png";
import img2Desktop from "../../assets/home/desktop/pic-2--desktop.png";
import img3Desktop from "../../assets/home/desktop/pic-3--desktop.png";
import img1Tablet from "../../assets/home/tablet/pic-1--tablet.png";
import img2Tablet from "../../assets/home/tablet/pic-2--tablet.png";
import img3Tablet from "../../assets/home/tablet/pic-3--tablet.png";
import img1Mobile from "../../assets/home/mobile/pic-1--mobile.png";
import img2Mobile from "../../assets/home/mobile/pic-2--mobile.png";
import img3Mobile from "../../assets/home/mobile/pic-3--mobile.png";

const Hero = () => {
  const content = [
    {
      id: 0,
      color: "white",
      title: "Create and share your photo stories. ",
      text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      alt: "Man standing in front of lake",
      imgDesktop: img1Desktop,
      imgTablet: img1Tablet,
      imgMobile: img1Mobile,
      btnText: "get an invite",
    },
    {
      id: 1,
      color: "",
      title: "Beautiful story every time",
      text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      alt: "Edition program on laptop",
      imgDesktop: img2Desktop,
      imgTablet: img2Tablet,
      imgMobile: img2Mobile,
      btnText: "view the stories",
    },
    {
      id: 2,
      color: "",
      title: "Designed for everyone",
      text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
      alt: "Man holding professional camera",
      imgDesktop: img3Desktop,
      imgTablet: img3Tablet,
      imgMobile: img3Mobile,
      btnText: "view the stories",
    },
  ];

  return (
    <div className="hero">
      <h2 className="visually-hidden">About Photosnap</h2>
      <div className="hero__container">
        {content.map((obj) => (
          <div className="hero__content" key={obj.id}>
            <div className="hero__descr">
              <h3 className={`hero__title hero__title--${obj.color}`}>
                {obj.title}
              </h3>
              <p className={`hero__text hero__text--${obj.color}`}>
                {obj.text}
              </p>
              <Link
                to={"/"}
                className={`arrow__btn arrow__btn--${obj.color} hero__link`}
              >
                {obj.btnText}
              </Link>
            </div>
            <div className="hero__img">
              <picture>
                <source media="(max-width: 425px)" srcSet={obj.imgMobile} />
                <source media="(max-width: 768px)" srcSet={obj.imgTablet} />
                <img src={obj.imgDesktop} alt={obj.alt} />
              </picture>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
