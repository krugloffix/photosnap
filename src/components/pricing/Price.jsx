import React from "react";

const Price = () => {
  const content = [
    {
      id: 0,
      title: "Basic",
      text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      priceMonthly: "19.00",
      priceYearly: "190.00",
    },
    {
      id: 1,
      title: "Pro",
      text: "More advanced features available. Recommended for photography veterans and professionals.",
      priceMonthly: "39.00",
      priceYearly: "390.00",
    },
    {
      id: 2,
      title: "Business",
      text: "Additional features available such as more detailed metrics. Recommended for business owners.",
      priceMonthly: "99.00",
      priceYearly: "990.00",
    },
  ];
  const [switcher, setSwitcher] = React.useState(false);
  const [monthly, setMonthly] = React.useState(true);
  const [yearly, setyearly] = React.useState(false);

  const switchPrice = () => {
    setMonthly(!monthly);
    setyearly(!yearly);
    setSwitcher(!switcher);
  };

  return (
    <div className="price">
      <div className="container price__container">
        <div className="price__switch">
          <p
            className={
              monthly ? "price__name price__name--active" : "price__name"
            }
          >
            Monthly
          </p>
          <button
            className={
              switcher ? "price__btn price__btn--active" : "price__btn"
            }
            onClick={() => switchPrice()}
          >
            <span className="price__switcher"></span>
          </button>
          <p
            className={
              yearly ? "price__name price__name--active" : "price__name"
            }
          >
            Yearly
          </p>
        </div>
        <div className="price__content">
          <ul className="price__list">
            {content.map((obj) => (
              <li
                key={obj.id}
                className={
                  obj.title === "Pro"
                    ? "price__item price__item--white"
                    : "price__item"
                }
              >
                <div className="price__descr">
                  <p className="price__option">{obj.title}</p>
                  <p className="price__text">{obj.text}</p>
                </div>
                <div className="price__total">
                  <p> ${monthly ? obj.priceMonthly : obj.priceYearly}</p>
                  <span>{monthly ? "per month" : "per year"}</span>
                </div>

                <button
                  className={
                    obj.title === "Pro"
                      ? "main__btn main__btn--white price__pick"
                      : "main__btn main__btn--black price__pick"
                  }
                >
                  Pick plan
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Price;
