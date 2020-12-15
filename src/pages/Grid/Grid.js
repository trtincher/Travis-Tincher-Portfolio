import React from "react";
import "./Grid.scss";

import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Quote1 from "../../components/Quote1/Quote1";
import Quote2 from "../../components/Quote2/Quote2";

function Grid() {
  return (
    <div className="Grid">
      <div className="grid_2">
        <Quote1 />
      </div>
      <div className="grid_1">
        <About />
      </div>
      <div className="grid_3">
        <Quote2 />
      </div>
      <div className="grid_4">
        <Skills />
      </div>
    </div>
  );
}

export default Grid;
