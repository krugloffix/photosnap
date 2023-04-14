import React from "react";
import { Link } from "react-router-dom";
import { footerNav } from "../components/nav";
import logo from "../assets/logo.svg";

import fbLogo from "../assets/socials/facebook.svg";
import ytLogo from "../assets/socials/youtube.svg";
import twitterLogo from "../assets/socials/twitter.svg";
import pinLogo from "../assets/socials/pinterest.svg";
import instLogo from "../assets/socials/instagram.svg";

const Footer = () => {
  const socialsList = [
    { id: 0, name: "Facebook", img: fbLogo, url: "https://www.facebook.com/" },
    { id: 1, name: "YouTube", img: ytLogo, url: "https://www.youtube.com/" },
    { id: 2, name: "Twitter", img: twitterLogo, url: "https://twitter.com/" },
    {
      id: 3,
      name: "Pinterest",
      img: pinLogo,
      url: "https://www.pinterest.com/",
    },
    {
      id: 4,
      name: "Instagram",
      img: instLogo,
      url: "https://www.instagram.com/",
    },
  ];

  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__wrapper">
          <Link to={"/"} className="footer__logo">
            <img src={logo} alt="Photosnap logo" />
            <span>Photosnap</span>
          </Link>
          <ul className="footer__socials">
            {socialsList.map((obj) => (
              <li key={obj.id}>
                <Link to={obj.url} target="_blank" className="footer__social">
                  <img src={obj.img} alt={obj.name} />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="footer__list">
            {footerNav.map((obj) => (
              <li key={obj.id}>
                <Link to={obj.url}>{obj.title}</Link>
              </li>
            ))}
          </ul>
          <Link
            to={"/"}
            className={`arrow__btn arrow__btn--white footer__link`}
          >
            get an invite
          </Link>
          <p className="footer__copy">Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
