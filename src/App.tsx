import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navbar, AnnouncementBar } from "./components";
import CustomRoute from "./routes";

function App() {
  return (
    <>
      <Router>
        <AnnouncementBar />
        <Navbar />
        <CustomRoute />
      </Router>
    </>
  );
}

export default App;
