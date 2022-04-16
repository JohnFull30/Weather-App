import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/Components";

function App() {
  return (
    <div className="App">
      <WeatherCard temp="40" />
      <WeatherCard temp="16" />
      <WeatherCard temp="10" />
    </div>
  );
}

export default App;
