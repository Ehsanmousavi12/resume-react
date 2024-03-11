import React from "react";
import { Link } from "react-router-dom";
import Ehsan from "../Image/Ehsan.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="root">
      <div className="bio">
        <img className="Imge" src={Ehsan}></img>

        <div className="name">seyed ehsan mousavi|web programmer</div>
        <div className="Link">
          <Link
            className="Link1"
            style={{ textDecoration: "none", Color: "black" }}
            to="/Resume"
          >
            about me
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
