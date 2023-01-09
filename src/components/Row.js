import React, { useEffect, useState } from "react";
import axios from "../axios";


const img_url ="https://image.tmdb.org/t/p/original/";
const Row = ({ tital, req,potret }) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(req);
      setMovie(data.data.results);
      return data;
    };
    fetchData();
  }, [req]);

  console.log(movie);

  



  return (
    <>
      <div className="container-fluid row">
        <h3>{tital}</h3>
        
        <div  className="poster flex mt-3 ml-4">
            {
                movie.map(item=>(
                    <img className={`poster_img ${potret && 'posterland'} `} key={item.id} src={`${img_url}${potret ? item.poster_path : item.backdrop_path}`} alt="" />
                ))
            }
        </div>
       
      </div>
    </>
  );
};

export default Row;
