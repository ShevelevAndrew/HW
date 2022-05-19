import React from "react";
import MessageField from "./MessageField";
import ChatList from "./chatList";

export default function App() {
  return (
    <div className="wrapper-chat">
      <div className="header">
        <ChatList />
      </div>
      <MessageField />
    </div>
  );
}
