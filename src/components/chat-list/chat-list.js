import { List } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import { Chat } from "./chat";

const chatlist = [
  { id: "ch_id1", chatname: "Сhat 1" },
  { id: "ch_id2", chatname: "Сhat 2" },
  { id: "ch_id3", chatname: "Сhat 3" },
  { id: "ch_id4", chatname: "Сhat 4" },
];

const ListStyles = styled(List)`
  background: #366fa5;
  padding-top: 0px;
  padding-bottom: 0px;
  a {
    text-decoration: none;
  }
`;

export const ChatList = () => {
  const [chats] = useState(chatlist);
  const { chatId } = useParams();
  return (
    <ListStyles component="nav">
      {chats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.id}`}>
          <Chat title={chat.chatname} selected={chatId === chat.id} />
        </Link>
      ))}
    </ListStyles>
  );
};
