import React from 'react';
import './App.css';
import Row from './Row.js'
import requests from './requests.js'
import Banner from './Banner'
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

     <Navbar/>    
     <Banner/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} islarge={true} />
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;

// d166676f0b162dad50727f805f987219
