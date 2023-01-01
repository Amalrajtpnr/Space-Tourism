import "./drawer.css";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

function Drawer(props) {

  return (
    <div className="position">
      <div className="close">
        <CgClose
          onClick={() => {
            props.setMethod(!props.method);
          }}
          className="icon"
        />
      </div>
      <div className="bar2">
        <Link
           onClick={() => {
            props.setMethod(!props.method);
          }}
          className="click1"
          to={"/"}
          style={{
            borderRight: location.pathname == "/" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">00</span> <h1 className="pages1">Home</h1>
        </Link>
        <Link
           onClick={() => {
            props.setMethod(!props.method);
          }}
          className="click1"
          to={"/destination"}
          style={{
            borderRight:
              location.pathname == "/destination" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">01</span>{" "}
          <h1 className="pages1">Destination</h1>
        </Link>
        <Link
           onClick={() => {
            props.setMethod(!props.method);
          }}
          className="click1"
          to={"/crew"}
          style={{
            borderRight:
              location.pathname == "/crew" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">02</span>
          <h1 className="pages1">Crew</h1>
        </Link>
        <Link
           onClick={() => {
            props.setMethod(!props.method);
          }}  
          to={"/technology"}
          className="click1"
          style={{
            borderRight:
              location.pathname == "/technology" ? "solid 3px white" : null,
          }}
        >
          <span className="order1">03</span>
          <h1 className="pages1">Technology</h1>
        </Link>
      </div>
    </div>
  );
}

export default Drawer;
