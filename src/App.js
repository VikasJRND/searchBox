import React, { Component } from "react";
// import Quiz from "./Quiz";
import Filter from "./Filter";

import "./App.css";

class App extends Component {
  render() {
    return <div className="App">{<Filter />}</div>;
  }
}

export default App;
