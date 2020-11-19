import React from 'react';
import Quake from './components/Quake';
import GoogleMap from './components/GoogleMap';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        <GoogleMap />
      </div>

      <div className="quakeContainer">
        <h1>Earthquakes from the past week:</h1>
        <Quake />
      </div>
    </div>
  );
}

export default App;
