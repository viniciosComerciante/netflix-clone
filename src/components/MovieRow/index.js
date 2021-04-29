import React from "react";
import "./style.css";

const MovieRow = ({ sectionTitle, items }) => {
  return (
    <div className="movieRow">
      <h2>{sectionTitle}</h2>
      <div className="movieRow-wrapper">
        <div className="movieRow-list">
          {items.results.length > 0 &&
            items.results.map((item, index) => (
              <div className="movieRow-item" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
