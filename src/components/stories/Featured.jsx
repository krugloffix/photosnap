import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStory } from "../../redux/StoriesSlice";
import { Link } from "react-router-dom";

const Featured = () => {
  const dispatch = useDispatch();

  const getStory = async () => {
    dispatch(fetchStory());
  };

  React.useEffect(() => {
    getStory();
  }, []);

  const story = useSelector((state) => state.stories.story);
  const date = story.date?.split(" ").slice(1, 4);

  return (
    <div className="featured">
      <div className="featured__container">
        <div className="featured__bg">
          <img src={story.image} alt="" />
        </div>
        <div className="featured__wrapper">
          <div className="featured__info">
            <p className="featured__pretitle">last month’s featured story</p>
            <h2 className="featured__title">{story.title}</h2>
            <p className="featured__date">
              {date && `${date[1]} ${date[0]} ${date[2]}`}
            </p>
            <p className="featured__author">by {story.author}</p>
            <div className="featured__text">{story.text}</div>
            <Link
              to={"/stories"}
              className="arrow__btn arrow__btn--white featured__btn"
            >
              Read the story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
