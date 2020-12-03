import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import EventsDisplay from "./components/EventsDisplay";

ReactDOM.render(
  <div className="eventPage">
    <EventsDisplay />
  </div>,

  document.getElementById("root")
);
