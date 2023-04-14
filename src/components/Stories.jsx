import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStories } from "../redux/StoriesSlice";

const Stories = ({ number }) => {
  const dispatch = useDispatch();

  const getStories = async () => {
    dispatch(fetchStories(number));
  };

  React.useEffect(() => {
    getStories();
  }, []);

  const stories = useSelector((state) => state.stories.stories);

  const getDate = (date) => {
    const d = date.split(" ").slice(1, 4);
    return `${d[1]} ${d[0]} ${d[2]}`;
  };

  return (
    <div className="stories">
      <div className="stories__container">
        <div className="stories__wrapper">
          {stories &&
            stories.map((obj, index) => (
              <div className="stories__block" key={index}>
                <div className="stories__img">
                  <img src={obj.image} alt={obj.title} />
                </div>
                <div className="stories__info">
                  <p className="stories__date">{getDate(obj.date)}</p>
                  <h3 className="stories__title">{obj.title}</h3>
                  <p className="stories__author">by {obj.author}</p>
                  <p className="stories__link">Read story</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
