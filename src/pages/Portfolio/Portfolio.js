import React from "react";
import "./Portfolio.scss";
import PortDeck from "../../components/PortDeck/PortDeck";
import divider from "../../assets/svgs/divider.svg";

function Portfolio() {
  return (
    <div className="Portfolio" id="Portfolio">
      <header>
        <h1>Portfolio</h1>
        <img src={divider} alt="divider" />
      </header>

      <PortDeck />
    </div>
  );
}

export default Portfolio;
