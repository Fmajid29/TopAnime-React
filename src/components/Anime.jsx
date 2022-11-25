import React from "react";

const Anime = (props) => {
  return (
    <div className="anime">
      <div className="anime-img">
        <img src={props.Image} />
      </div>
      <div className="content">
        <p>{props.rating}</p>
        <h2>{props.AnimeTitle}</h2>
      </div>
    </div>
  );
};

export default Anime;
