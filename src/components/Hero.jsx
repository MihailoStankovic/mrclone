import "../styles/Hero.css";
//import React from "react";
//import photo1 from "../assets/background-photo.png";
import photo2 from "../assets/main-txt-promo-1-263a1ffd.svg";
import photo3 from "../assets/main-character-96e43564.png";

function Hero() {
  
  return (
    <div className="container">
      
      <div className="bonus">
        <img src={photo2} alt="bonus-text" className="zzz"/>
        <button className="button-claim">Claim Now</button>
      </div>

      <div className="mro-photo">
          <img className="mro-photo" src={photo3} alt="photo" />
      </div>

    </div>
  );
}

export default Hero;
