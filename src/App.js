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

  return (
    <div className="App">
      <TopBar />
      <NavLeft />
      <Contact
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />

      <div className="wrapper">
        <Landing />
        <Grid />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
