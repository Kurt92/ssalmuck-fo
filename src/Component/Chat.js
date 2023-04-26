import React, { useState } from "react";
import "./css/ChatList.css";
import { Link } from "react-router-dom";

function ChatList() {
  const [chats, setChats] = useState([
    { id: 1, name: "John Smith", avatar: "https://placeimg.com/50/50/people" },
    { id: 2, name: "Jane Doe", avatar: "https://placeimg.com/50/50/people" },
    { id: 3, name: "Bob Johnson", avatar: "https://placeimg.com/50/50/people" },
  ]);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatItemClick = (chat) => {
    setSelectedChat(chat);
    //window.location.href = "/chat/detail";
  };

  return (
    <div className="ChatList">
      {chats.map((chat) => (
        <Link
          to={`/chat/detail`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            key={chat.id}
            className="ChatListItem"
            onClick={() => {
              handleChatItemClick(chat);
            }}
          >
            <img src={chat.avatar} alt={chat.name} />
            <div className="ChatListItemText">
              <div className="ChatListItemName">{chat.name}</div>
              <div className="ChatListItemMessage">Hello!</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ChatList;
