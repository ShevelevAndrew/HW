import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChatList, MessageList, Layout } from "../components";
export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listner = ({ code }) => {
      // console.log("code", code);
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listner);

    return () => document.removeEventListener("keydown", listner);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            messages={
              <div className="blocktext">
                <p>Выберите, кому хотели бы написать</p>
              </div>
            }
            cahat={<ChatList />}
          />
        }
      />
      <Route
        path=":chatId"
        element={<Layout messages={<MessageList />} cahat={<ChatList />} />}
      />
    </Routes>
  );
  // return <Layout messages={<MessageList />} cahat={<ChatList />}></Layout>;
};
