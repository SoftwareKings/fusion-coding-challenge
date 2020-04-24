import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [chartType, setChartType] = useState("static");

  return (
    <div className="App">
      <div className="App-navs">
        <div className="App-navButton" onClick={() => setChartType("static")}>
          <span>Show Static Graph</span>
        </div>

        <div className="App-navButton" onClick={() => setChartType("dynamic")}>
          <span>Show Dyanmic Graph</span>
        </div>
      </div>

      <div className="App-charts">
        <h1>Fusion Chart Graph - {chartType}</h1>
      </div>
    </div>
  );
}

export default App;
