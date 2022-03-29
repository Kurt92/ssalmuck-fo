import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import SlideBoard from "./Component/SlideBoard";
import MainMenuContainer from "./Component/MainMenuContainer";
import MainContainer from "./Component/MainContainer";
import MainCard from "./Component/MainCard";
import { useState } from "react";
import Footer from "./Component/Footer";
import { Link, Route, Switch } from "react-router-dom";
import Board from "./Component/Board";
import Board2 from "./Component/Board2";

function App() {
  let [stateCard, setStateCard] = useState(["chcch123", ""]);

  return (
    <div className="App">
      <Route exact path="/">
        <Navbar />

        <SlideBoard />
        <MainMenuContainer />
        <MainContainer />
        <MainCard stateCard={stateCard} />

        <Footer />
      </Route>

      <Route exact path="/aaa">
        <Navbar />
        <div>aaa</div>
      </Route>

      <Route exact path="/board2">
        <Navbar />
        <Board2 />
        <Footer />
      </Route>

      <Route exact path="/board">
        <Navbar />
        <Board />
        <Footer />
      </Route>
    </div>
  );
}

export default App;
