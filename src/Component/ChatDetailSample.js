import React, { useState, useEffect } from "react";
import "./css/chat.css";

function ChatDetailSample() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket("ws://localhost:8099/chat");
    newWs.addEventListener("message", handleIncomingMessage);
    setWs(newWs);
  }, []);

  useEffect(() => {
    const messagesContainer = document.querySelector(".messages-container");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  function handleIncomingMessage(event) {
    const message = JSON.parse(event.data);
    setMessages([...messages, message]);
  }

  function handleSendMessage() {
    const newMessage = {
      text: inputValue,
      sender: "me",
      timestamp: new Date(),
    };
    ws.send(JSON.stringify(newMessage));
    setMessages([...messages, newMessage]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages
          .slice(0)
          .reverse()
          .map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "me" ? "mine" : "theirs"
              }`}
            >
              <div className="message-content">{message.text}</div>
            </div>
          ))}
      </div>
      <div className="input-container">
        <input
          className="input-field"
          type="text"
          placeholder="Type your message"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatDetailSample;
