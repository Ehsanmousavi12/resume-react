import React from "react";
import EhsanResume from "../JSON/EhsanResume.json";
import "./Resume.css";
import Ehsan from "../Image/Ehsan.jpg";

function Pictur() {
  return (
    <div className="root1">
      <div className="pictur">
        <img className="pic" src={Ehsan} alt="Ehsan" />

        {EhsanResume.map((Q) => {
          return (
            <div className="namme">
              <div className="about-me">
                {Q.about}
                {Q.text}
              </div>
              {Q.name}
              {Q.web}
              <div className="up">
                <div>{Q.Birth}</div>
                <div>{Q.maritalstatus}</div>
                <div>{Q.Militaryservice}</div> <div>{Q.mobilenum}</div>
                <div>{Q.city}</div>
                <div>{Q.email}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <>
      <Pictur />
    </>
  );
}

export default Resume;
