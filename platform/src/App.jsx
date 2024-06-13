import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import HelloWorldOrganism from "OpenNoteOrganismFactory/HelloWorldOrganism";

const App = () => (
  <div className="container">
    <div>Name: OpenNotePlatform</div>
    <div> 1 HelloWorldOrganism</div>
    <HelloWorldOrganism />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
