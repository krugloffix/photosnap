import React from "react";

import Stories from "../components/Stories";
import Featured from "../components/stories/Featured";

const Story = () => {
  return (
    <div className="story">
      <h1 className="visually-hidden">Photosnap stories</h1>
      <Featured />
      <Stories number={16} />
    </div>
  );
};

export default Story;
