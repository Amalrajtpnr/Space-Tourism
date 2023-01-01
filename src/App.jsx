import { useState } from "react";
import "./App.css";
import Home from "./componenets/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Destination from "./componenets/destination/destination";
import Crew from "./componenets/crew/crew";
import Technology from "./componenets/technology/technology";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/destination"} element={<Destination />} />
          <Route path={"/crew"} element={<Crew />} />
          <Route path={"/technology"} element={<Technology />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
