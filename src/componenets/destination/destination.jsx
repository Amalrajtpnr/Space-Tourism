import "./destination.css";
import logo from "../../assets/logo.svg";
import moon from "../../assets/image-moon.png";
import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";
import Header from "../header/header";
import JSON from "../../data.json";
import moo from "../../assets/destination/image-moon.webp";
import mar from "../../assets/destination/image-mars.png";
import europa from "../../assets/destination/image-europa.png";
import titan from "../../assets/destination/image-titan.png";

function Destination() {
  const [tabs, setTabs] = useState("Moon");
  const [index, setindex] = useState(0);

  function getimages(index) {
    if (index === 0) {
      return moo;
    } else if (index == 1) {
      return mar;
    } else if (index == 2) {
      return europa;
    } else {
      return titan;
    }
  }

  function RenderTabs() {
    return (
      <div className="main1">
        <div className="details1">
          <div className="images">
            <div className="head">
              <h1 className="text">
                <span className="digit"> 01</span> PICK YOUR DESTINATION
              </h1>
            </div>
            <img className="moon" src={getimages(index)} alt="" />
            <div className="nav-bar-mobile">
              {JSON.destinations.map((item, i) => {
                return (
                  <h1
                    key={i}
                    onClick={() => setindex(i)}
                    className="array"
                    style={{
                      borderBottom: i == index ? "solid 3px white" : null,
                    }}
                  >
                    {item.name}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
        <div className="planet">
          <h1 className="title2">{JSON.destinations[index].name}</h1>
          <p className="paragraph1">{JSON.destinations[index].description}</p>
          <div className="divider"></div>
          <div className="footer">
            <div className="distance">
              <h1 className="specifications">AVG. DISTANCE</h1>
              <h1 className="number">{JSON.destinations[index].distance}</h1>
            </div>
            <div className="distance">
              <h1 className="specifications">EST. TRAVEL TIME</h1>
              <h1 className="number">{JSON.destinations[index].travel}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log(index);
  return (
    <div className="App1">
      <Header />
      <div className="details2">
        <div className="about1">
          <div className="nav-bar">
            {JSON.destinations.map((item, i) => {
              return (
                <h1
                  key={i}
                  onClick={() => setindex(i)}
                  className="array"
                  style={{
                    borderBottom: i == index ? "solid 3px white" : null,
                  }}
                >
                  {item.name}
                </h1>
              );
            })}
          </div>
          {RenderTabs()}
        </div>
      </div>
    </div>
  );
}

export default Destination;
