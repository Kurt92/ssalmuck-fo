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
import ChatGpt from "./Component/ChatGpt";
import ChatGptSignUp from "./Component/ChatGptSignUp";
import ChatGptBoard2Input from "./Component/ChatGptBoard2Input";

import ChatGptFooter from "./Component/ChatGptFooter";
import Board2Input from "./Component/Board2Input";
import Login from "./Component/Login";

function App() {
  let [notice, setNotice] = useState();

  return (
    <div className="App">
      <Route exact path="/">
        <Navbar />

        <SlideBoard />
        <MainMenuContainer />
        <MainContainer />
        <MainCard />

        <ChatGptFooter />
      </Route>

      <Route exact path="/login">
        <Navbar />
        <Login />
      </Route>

      <Route exact path="/ChatGpt">
        <ChatGpt />
      </Route>
      <Route exact path="/ChatGptSignUp">
        <Navbar />
        <ChatGptSignUp />
      </Route>

      <Route exact path="/board2">
        <Navbar />
        <Board2 />
        <ChatGptFooter />
      </Route>

      <Route exact path="/board2/input">
        <Navbar />
        <ChatGptBoard2Input />
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
