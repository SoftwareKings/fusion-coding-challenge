import React, { useState } from 'react';
import './App.css';
import { StaticChart, DyanmicChart } from './components/FusionCharts';

function App() {
  const [chartType, setChartType] = useState("static");

  return (
    <div className="App">
      <div className="App-navs">
        <div className="App-navButton" onClick={() => setChartType("static")}>
          <span>Show Static Graph</span>
        </div>

        <div className="App-navButton" onClick={() => setChartType("dynamic")}>
          <span>Show Dynamic Graph</span>
        </div>
      </div>

      <div className="App-charts">
        <h1>FusionCharts - {chartType}</h1>
        {
          chartType === "static" ? <StaticChart/> : <DyanmicChart/>
        }
      </div>
    </div>
  );
}

export default App;
