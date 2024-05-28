import "../styles/Footer.css";

import React from "react";

import slika1 from "../assets/game-images/18-year-logo-8deedd24.svg";
import slika2 from "../assets/game-images/cds-437b92ad.svg";
import slika3 from "../assets/game-images/rtg-logo-8d09b7a4.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="pictures">
        <img src={slika1} alt="18+" className="eighteen" />
        <img src={slika2} alt="cds" className="cds" />
        <img src={slika3} alt="spinlogic" className="spin-logic" />
      </div>
      <div className="copyright">
        <p>Copyright © <strong>2024</strong> . All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
