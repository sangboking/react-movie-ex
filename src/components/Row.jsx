import axios from "../api/axios";
import React, { useEffect, useState } from "react";

export default function Row({title, id, fetchURL, isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovieData();
  }, [])

  console.log(movies)

  const fetchMovieData = async() => {
    const request = await axios.get(fetchURL);
    setMovies(request.data.results);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span className="arrow">
            {"<"}
          </span>
        </div>

        <div id={id} className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            } `}
            alt={movie.name}
          />
        ))}
        </div>
        <div className="slider__arrow-right">
          <span className="arrow">{">"}</span>
        </div>
      </div>


    </section>
 );
}
