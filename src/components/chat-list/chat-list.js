import { List } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useState } from "react";
import styled from "@emotion/styled";
import { useSelector, useDispatch } from "react-redux";
import {
  createConversation,
  deleteConversation,
} from "../../store/conversations";
import { Chat } from "./chat";
import { useCallback } from "react";

// const chatlist = [
//   { id: "ch_id1", chatname: "Сhat 1" },
//   { id: "ch_id2", chatname: "Сhat 2" },
//   { id: "ch_id3", chatname: "Сhat 3" },
//   { id: "ch_id4", chatname: "Сhat 4" },
// ];

const ListStyles = styled(List)`
  background: #366fa5;
  padding-top: 0px;
  padding-bottom: 0px;
  a {
    text-decoration: none;
  }
`;

export const ChatList = () => {
  const { conversation, pending } = useSelector((state) => state.conversation);
  // const [chats] = useState(chatlist);
  const { chatId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createConversationByName = () => {
    const name = prompt("Input chat name ");
    if (!!name) {
      dispatch(createConversation(conversation.length + 1, name));
    } else {
      alert("Dot`t validate chat name");
    }
  };

  const deleteConversationByName = useCallback(
    (id, e) => {
      e.preventDefault();
      dispatch(deleteConversation(id));
      navigate("/chat");
    },
    [dispatch, navigate]
  );
  return (
    <ListStyles component="nav">
      <button onClick={createConversationByName}>create</button>
      {pending
        ? "pending..."
        : conversation.map((chat) => (
            <Link key={chat.id} to={`/chat/${chat.id}`}>
              <Chat
                chatid={chat.id}
                title={chat.chatname}
                selected={chatId === chat.id}
                deleteConversationByName={deleteConversationByName}
              />
            </Link>
          ))}
    </ListStyles>
  );
};
