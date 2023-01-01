import React, { useState } from "react";
import "./home.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Header from "../header/header";

function Home() {

  return (
    <div className="main">
      <Header  />
      <div className="details">
        <div className="about">
          <h1 className="title">SO, YOU WANT TO TRAVEL TO</h1>
          <h1 className="title1">SPACE</h1>
          <p className="paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explore">
          <h1 className="view">Explore</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
