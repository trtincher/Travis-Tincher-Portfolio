import React, { useState } from "react";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Grid from "./pages/Grid/Grid";
import Portfolio from "./pages/Portfolio/Portfolio";
import TopBar from "./components/Nav/TopBar";
import NavLeft from "./components/Nav/NavLeft";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App() {
  const [isContactOpen, setIsContactOpen] = useState("false");
  const [top, setTop] = useState("5000px");

  const onContactClick = () => {
    if (isContactOpen) {
      setTop("5000px");
    } else {
      setTop("calc(50% - 300px)");
    }

    setIsContactOpen(!isContactOpen);
  };

  return (
    <div className="App">
      <TopBar onContactClick={onContactClick} />
      <NavLeft onContactClick={onContactClick} />
      <Contact onContactClick={onContactClick} top={top} />

      <div className="wrapper">
        <Landing />
        <Grid />
        <Portfolio />
        <Footer onContactClick={onContactClick} />
      </div>
    </div>
  );
}

export default App;
