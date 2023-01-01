import "./header.css";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import Drawer from "../drawer/drawer";
import { useEffect, useState } from "react";

function Header() {
  const [method, setMethod] = useState(false);


  return (
    <div className="navigation-bar1">
      <img className="logo1" src={logo} alt="" />
      <GoThreeBars
        onClick={() => {
          setMethod(!method);
        }}
        className="options"
      />
      <div className="line1"></div>
      <div className="bar1">
        <Link
          className="click"
          to={"/"}
          style={{
            borderBottom: location.pathname == "/" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">00</span> <h1 className="pages1">Home</h1>
        </Link>
        <Link
          className="click"
          to={"/destination"}
          style={{
            borderBottom:
              location.pathname == "/destination" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">01</span>{" "}
          <h1 className="pages1">Destination</h1>
        </Link>
        <Link
          className="click"
          to={"/crew"}
          style={{
            borderBottom:
              location.pathname == "/crew" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">02</span>
          <h1 className="pages1">Crew</h1>
        </Link>
        <Link
          to={"/technology"}
          className="click"
          style={{
            borderBottom:
              location.pathname == "/technology" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">03</span>
          <h1 className="pages1">Technology</h1>
        </Link>
      </div>
      {method && <Drawer setMethod={setMethod} method={method}/> }
    </div>
  );
}

export default Header;
