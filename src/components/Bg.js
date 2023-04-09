import React, { useEffect, useState } from "react";
import request from "../config/request";
import axios from "../axios";


const Bg = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(request.fatchNetflixShow);
      const nu = Math.floor(Math.random() * data.data.results.length);
      console.log(nu);
      setMovie(data.data.results[nu]);
      return data;
    };

    fetchData();
  }, [request.fatchNetflixShow]);

  console.log(movie);

  return (
    <>
      <header
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          height: "80vh",
        }}
      >
        
          <div className="container-fluid absolute bga">
            <h1>{movie.name}</h1>
            <div className="bto">
              <button>Play</button>
              <button>My List</button>
            </div>
            <div className="desction">
              <p>{movie.overview}</p>
            </div>
            
          </div><div className="bg">
        </div>
      </header>
    </>
  );
};

export default Bg;
