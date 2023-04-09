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

      <Row tital='Netflix Original' req={request.request.fatchNetflixShow} potret={true}/>
      <Row tital="Tranding" req={request.request.fatchTranding}/>
      <Row tital="Top Rated" req={request.request.fetchTopRated}/>
      <Row tital="Horror" req={request.request.fetchHorror}/>
      <Row tital="Comedy" req={request.request.fetchComedy}/>
      <Row tital="Sci-Fci" req={request.request.fetchScifi}/>
      <Row tital="Romanetc" req={request.request.fetchRomance}/>
    </>
  );
};

export default Home;
