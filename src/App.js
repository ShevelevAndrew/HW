import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProfilePge, ChatPage, HomePage } from "./pages";
import { Header } from "./components";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/profile" element={<ProfilePge />} />
          <Route path="/chat/*" element={<ChatPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<h1>Page not found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
    // <div className="wrapper">
    //   <div className="chatlist">
    //     <div className="header"></div>
    //     <ChatList />
    //   </div>
    //   <div className="wrapper-chat">
    //     <div className="header"></div>
    //     <MessageField />
    //   </div>
    // </div>
  );
}
