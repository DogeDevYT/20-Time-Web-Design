import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import GorillaPage from "./GorillaPage";
import TigerPage from "./TigerPage";
import SharkPage from "./SharkPage";
import LionPage from "./LionPage";
import DogPage from "./DogPage";
import HomePage from "./HomePage";

const App = () => {
  return (
    <Router>
      <div>
        {/********* NavBar component *********/}
        <NavBar />

        {/** Actual Routes for our React page... maybe I should've chosen static routing :( */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gorilla" element={<GorillaPage />} />
          <Route path="/tiger" element={<TigerPage />} />
          <Route path="/shark" element={<SharkPage />} />
          <Route path="/lion" element={<LionPage />} />
          <Route path="/dog" element={<DogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
