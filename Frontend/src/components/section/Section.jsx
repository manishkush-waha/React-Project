import React from "react";
import Card from "./card";
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import './Section.css'

const section = () => {
  return (
    <section>
      <div className="section-container">
        <div className="middle-sidebar">
          <Card name={instagram}/>
          <Card name={facebook}/>
          <Card name={linkedin}/>
          <Card name={twitter}/>
        </div>
      </div>
    </section>
  );
};

export default section;
