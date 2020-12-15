import React from "react";
import "./Quote1.scss";
import beerMug from "../../assets/svgs/beerMug.svg";

function Quote1() {
  return (
    <div className="Quote1">
      <p>
        A software user experience should be like trying a new craft beer...
      </p>
      <img src={beerMug} alt="beer mug background" />
    </div>
  );
}

export default Quote1;
