import React from "react";
import "./Quote2.scss";
import beerBottles from "../../assets/svgs/beerBottles.svg";

function Quote2() {
  return (
    <div className="Quote2">
      <p>
        You are intrigued by the label, convinced by the first sip, and left
        wanting more.
      </p>
      <img src={beerBottles} alt="beer mug background" />
    </div>
  );
}

export default Quote2;
