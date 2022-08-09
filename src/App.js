import  React from "react";

import  requests  from "./requests.js";

import  Row  from "./Row";
import Banner from './Banner';
import Nav from './Nav'

import './App.css';


function App() {
 
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title={"NETFLIX ORIGINALS"} 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance movies"} fetchUrl={requests.fetchRomancenMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
