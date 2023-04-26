import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import SlideBoard from "./Component/SlideBoard";
import MainMenuContainer from "./Component/MainMenuContainer";
import MainContainer from "./Component/MainContainer";
import MainCard from "./Component/MainCard";
import { useState } from "react";
import Footer from "./Component/Footer";
import { Link, Route, Routes } from "react-router-dom";
import Board from "./Component/Board";
import Board2 from "./Component/Board2";
import ChatGpt from "./Component/ChatGpt";
import ChatGptSignUp from "./Component/SignUp";
import ChatGptBoard2Input from "./Component/Board2Input";
import Chat from "./Component/Chat";

import ChatGptFooter from "./Component/Footer2";
import Board2Input from "./Component/Board2Input";
import Login from "./Component/Login";
import ChatGptBoard2Detail from "./Component/Board2Detail";
import ChatDetail from "./Component/ChatDetail";

function App() {
  let [notice, setNotice] = useState();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <SlideBoard />
              <MainMenuContainer />
              <MainContainer />
              <MainCard />
              <ChatGptFooter />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />

        <Route path="/ChatGpt" element={<ChatGpt />} />

        <Route
          path="/ChatGptSignUp"
          element={
            <>
              <Navbar />
              <ChatGptSignUp />
            </>
          }
        />

        <Route
          path="/board2/*"
          element={
            <>
              <Navbar />
              <Board2 />
              <ChatGptFooter />
            </>
          }
        />

        <Route
          path="/board2/detail"
          element={
            <>
              <Navbar />
              <ChatGptBoard2Detail />
            </>
          }
        />

        <Route
          path="/board2/input"
          element={
            <>
              <Navbar />
              <ChatGptBoard2Input />
            </>
          }
        />

        <Route
          path="/board"
          element={
            <>
              <Navbar />
              <Board />
              <Footer />
            </>
          }
        />

        <Route
          path="/chat"
          element={
            <>
              <Navbar />
              <Chat />
            </>
          }
        />

        <Route
          path="/chat/detail"
          element={
            <>
              <Navbar />
              <ChatDetail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
