import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import HelloWorldOrganism from "./HelloWorldOrganism";

const App = () => (
  <div className="container">
    <div>Name: OpenNoteOrganismFactory</div>
    <div>1 HelloWorldOrganism</div>
    <HelloWorldOrganism />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
