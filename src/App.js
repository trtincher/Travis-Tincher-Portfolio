import "./App.scss";
import Landing from "./pages/Landing/Landing";
import Grid from "./pages/Grid/Grid";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Landing />
        <Grid />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
