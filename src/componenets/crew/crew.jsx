import "./crew.css";
import { useEffect, useState } from "react";
import Header from "../header/header";
import JSON from "../../data.json";
import ansari from "../../assets/crew/image-anousheh-ansari.png";
import hurley from "../../assets/crew/image-douglas-hurley.png";
import mark from "../../assets/crew/image-mark-shuttleworth.png";
import victor from "../../assets/crew/image-victor-glover.png";

function Crew() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const action = setInterval(() => {
      if (index == JSON.crew.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 4000);
    return () => {
      clearInterval(action);
    };
  }, []);

  function getimages(index) {
    if (index === 0) {
      return hurley;
    } else if (index == 1) {
      return mark;
    } else if (index == 2) {
      return victor;
    } else {
      return ansari;
    }
  }

  function RenderTabs() {
    {
      return (
        <div className="main3">
          <div className="details3">
            <div className="head3">
              <h1 className="text2">
                <span className="digit2"> 02</span> MEET YOUR CREW
              </h1>
            </div>
            <div className="leaders">
              <h1 className="role">{JSON.crew[index].role}</h1>
              <h1 className="name">{JSON.crew[index].name}</h1>
              <h1 className="name1">{JSON.crew[index].bio}</h1>
            </div>
            <div className="selector">
              {JSON.crew.map((item, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      backgroundColor:
                        i === index ? "white" : "rgb(136, 136, 136)",
                    }}
                    onClick={() => {
                      setIndex(i);
                    }}
                    className="circle"
                  ></div>
                );
              })}
            </div>
            <div className="images4">
              <img className="moon" src={getimages(index)} alt="" />
            </div>
          </div>
          <div className="images2">
            <img className="moon" src={getimages(index)} alt="" />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="App3">
      <Header />
      {RenderTabs()}
    </div>
  );
}

export default Crew;
