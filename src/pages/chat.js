import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChatList, MessageList, Layout } from "../components";
import { getConversations } from "../store/conversations";
export const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const conversation = useSelector((state) => state.conversation.conversation);

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

  useEffect(() => {
    if (!conversation.length) {
      dispatch(getConversations());
    }
  }, [dispatch, conversation]);

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
