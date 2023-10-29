import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello from React</h1>
      <h2> Is this working?</h2>
      <Weather city="Paris" />
      <Weather city="Tokyo" />
    </div>
  );
}

export default App;
