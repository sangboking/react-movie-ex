import React from "react";
import { Reset } from "styled-reset";
import requests from "./api/requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";

export default function App() {
  return (
    <div style={{ height: "100rem" }}>
      <Reset />

      <Nav />
      <Banner />
      
      <Row 
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchURL={requests.fetchTrending} 
      />
      <Row
        title="Top Rated"
        id="TR"
        fetchURL={requests.fetchTopRated} 
      />
      
      <Row
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies} 
      />

      <Row
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
      />
    </div>
  );
}
