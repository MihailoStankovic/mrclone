import React from "react";
import "../styles/Body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="h1">
        <h1>
          Mr. <strong className="blueColor">O</strong> - THE BEST
          <span className="blueColor"> CRYPTO CASINO</span>
        </h1>
      </div>
      <div className="paragraph">
        <p>
          Mr.<span className="blueColor">O </span>Casino’s team gathered around the idea of dealing a fair hand and
          providing honest, straight-shooting experience. We believe in
          superfast payouts that`ll help build trust and long-term
          relationships. No fine print, no <br /> hassle. But hey, don’t trust
          us. Try us!
        </p>
      </div>
    </div>
  );
};

export default Body;
