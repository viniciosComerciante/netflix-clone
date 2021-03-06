import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./style.css";

const FeaturedMovie = ({ data }) => {
  let firstDate = new Date(data.first_air_date);
  let genres = data.genres.map((genre) => genre.name);

  let description = data.overview

  if(description.length > 200){
    description = description.substring(0, 200)+ '...' ;
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div className="featured-vertical-gradient">
        <div className="featured-horizontal-gradient">
          <div className="featured-name">{data.name && data.name}</div>
          <div className="featured-info">
            <div className="featured-points">{data.vote_average} pontos</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {data.number_of_seasons} temporada
              {data.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>
          <div className="featured-description">{description}</div>
          <div className="featured-buttons">
            <a href={`/watch/${data.id}`} className="featured-watch-button">
              <BsFillPlayFill /> Assistir
            </a>
            <a href={`/listadd/${data.id}`} className="featured-my-list-button">+ Minha lista</a>
          </div>
          <div className="featured-genres">
            <strong>Genero:</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
      {/* <div>{data.name}</div> */}
    </section>
  );
};

export default FeaturedMovie;
