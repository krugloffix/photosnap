import React from "react";
import { Link, NavLink } from "react-router-dom";
import { nav } from "../components/nav";
import logo from "../assets/logo.svg";

const Header = () => {
  const [burger, setBurger] = React.useState(false);

  const onClickCloseBurger = () => {
    setBurger(!burger);
  };

  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__wrapper">
          <Link
            to={"/"}
            className="header__logo"
            onClick={() => setBurger(false)}
          >
            <img src={logo} alt="Photosnap logo" />
            <span>Photosnap</span>
          </Link>
          <div
            className={
              burger ? "header__menu header__menu--active" : "header__menu"
            }
          >
            <div className="header__list">
              {nav.map((obj) => (
                <li key={obj.id} className="header__item">
                  <NavLink
                    to={`/${obj.url}`}
                    className={({ isActive }) =>
                      isActive
                        ? "header__link header__link--active"
                        : "header__link"
                    }
                    onClick={() => onClickCloseBurger()}
                  >
                    {obj.title}
                  </NavLink>
                </li>
              ))}
            </div>
            <Link
              to={"/"}
              className="main__btn main__btn--black header__btn"
              onClick={() => onClickCloseBurger()}
            >
              Get an invite
            </Link>
          </div>
          <button
            className={burger ? "burger burger--active" : "burger"}
            aria-label="Open menu"
            aria-expanded="false"
            onClick={() => onClickCloseBurger()}
          >
            <span className="burger-line"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
