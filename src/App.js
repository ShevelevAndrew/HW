import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import {
  ProfilePge,
  ChatPage,
  HomePage,
  GistsPage,
  SignUpPage,
  LoginPage,
} from "./pages";
import { Header } from "./components";
import { PrivateRoute, PublicRoute } from "./components";
import { auth } from "./api/firebase";

export default function App() {
  const [session, setSession] = useState(null);

  const isAuth = !!session;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header session={session} />
        <Routes>
          <Route
            path="/profile"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ProfilePge />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat/*"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ChatPage />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/gists"
            element={
              <PrivateRoute isAuth={isAuth}>
                <GistsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/sign-up"
            element={
              <PublicRoute isAuth={isAuth}>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isAuth={isAuth}>
                <LoginPage />
              </PublicRoute>
            }
          />
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
