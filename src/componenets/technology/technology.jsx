import "./technology.css";
import Header from "../header/header";
import { useState } from "react";
import JSON from "../../data.json";
import launch from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import launch1 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import capsule2 from "../../assets/technology/image-space-capsule-landscape.jpg";
import spaceport3 from "../../assets/technology/image-spaceport-landscape.jpg";

function Technology() {
  const [index, setIndex] = useState(0);

  function getimages(index) {
    if (index === 0) {
      return launch;
    } else if (index == 1) {
      return capsule;
    } else {
      return spaceport;
    }
  }

  function getimages_mobile(index) {
    if (index === 0) {
      return launch1;
    } else if (index == 1) {
      return capsule2;
    } else {
      return spaceport3;
    }
  }

  function RenderTabs() {
    {
      return (
        <div className="main4">
          <div className="details4">
            <div className="head4">
              <h1 className="text2">
                <span className="digit4"> 03</span> SPACE LAUNCH 103
              </h1>
            </div>
            <div className="images3">
              <img className="moon3" src={getimages_mobile(index)} alt="" />
            </div>
            <div className="leaders4">
              <div className="selector1">
                {JSON.technology.map((item, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        setIndex(i);
                      }}
                      className="circle1" style={{backgroundColor:i===index ? "white" : "transparent" , color:i===index ? "black" : "white"}}
                    >
                      <h1 className="add">{i + 1}</h1>
                    </div>
                  );
                })}
              </div>
              <div className="description">
                <h1 className="name1">The Technology</h1>
                <h1 className="name">{JSON.technology[index].name}</h1>
                <h1 className="name1">{JSON.technology[index].description}</h1>
              </div>
            </div>
          </div>
          <div className="images2">
            <img className="moon3" src={getimages(index)} alt="" />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="App4">
      <Header />
      {RenderTabs()}
    </div>
  );
}

export default Technology;
