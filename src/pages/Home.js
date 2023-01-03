import React from "react";
import Bg from "../components/Bg";
import Nav from "../components/Nav";
import Row from "../components/Row";
import request from '../config/request'

const Home = () => {

  

  return (
    <>
      <div className="test">
        <Nav />
        <Bg />
      </div>

      <Row tital='Netflix Original' req={request.fatchNetflixShow} potret={true}/>
      <Row tital="Tranding" req={request.fatchTranding}/>
      <Row tital="Top Rated" req={request.fetchTopRated}/>
      <Row tital="Horror" req={request.fetchHorror}/>
      <Row tital="Comedy" req={request.fetchComedy}/>
      <Row tital="Sci-Fci" req={request.fetchScifi}/>
      <Row tital="Romanetc" req={request.fetchRomance}/>
    </>
  );
};

export default Home;
