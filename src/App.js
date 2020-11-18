import React from 'react';
import Quake from './components/Quake';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="mapContainer">
        ...put Map Component here...
      </div>

      <div className="quakeContainer">
        <h3>Earthquakes from the past week:</h3>
        <Quake />
      </div>
    </div>
  );
}

export default App;
