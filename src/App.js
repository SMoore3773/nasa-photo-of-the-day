import React from "react";
import "./App.css";
import axios from 'axios';
import Header from './Components/Header/Header';
import ContentBox from './Components/ContentBox/ContentBox';
import Footer from './Components/Footer/Footer.js';
//apod apikey = YJEP9rCzIGrpzsvr9FBAQurWLIMR1KEWEq2f3HMd

//ex url = https://api.nasa.gov/planetary/apod?api_key=YJEP9rCzIGrpzsvr9FBAQurWLIMR1KEWEq2f3HMd


function App() {
  return (
    <div className="App">
      
      <ContentBox />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
