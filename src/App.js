import React from "react";
import classes from "./App.module.css";
import Nav from "./components/layout/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/layout/Home";
import Science from "./components/layout/Science";
import Sports from "./components/layout/Sports";
import Business from "./components/layout/Business";
import Entertainment from "./components/layout/Entertainment";
import Health from "./components/layout/Health";
import Technology from "./components/layout/Technology";

function App() {
  return (
    <div className={classes.container}>
      <Nav />

      <Routes>
         <Route path="/golden-view-the-news-app/" element={<Home />} />
        <Route path="/golden-view-the-news-app" element={<Home />} />
        <Route path="/golden-view-the-news-app/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/golden-view-the-news-app/health" element={<Health />} />
        <Route path="/golden-view-the-news-app/science" element={<Science />} />
        <Route path="/golden-view-the-news-app/sports" element={<Sports />} />
        <Route path="/golden-view-the-news-app/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
// &pagesize=99
