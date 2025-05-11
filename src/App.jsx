import React from 'react';
import NavBar from './components/NavBar';
import './App.css'
import data from './components/Data'; 
// import Carousel from './components/Carousel';

function App() {

  return (
    <div className="app-container">
      <NavBar />
      {/* <Carousel articles={data} /> */}
    </div>
  );
}

export default App;
