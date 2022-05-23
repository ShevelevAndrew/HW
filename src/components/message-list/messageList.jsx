import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { AUTHORS } from "../utils/constants";
import { format } from "date-fns";
import { Message } from "./message/Message";

const initMess = { ch_id1: [], ch_id2: [], ch_id3: [], ch_id4: [] };
const answer = [
  { autor: AUTHORS.BOT, mess: "Hi!" },
  { autor: AUTHORS.BOT, mess: "How are you?" },
  { autor: AUTHORS.BOT, mess: "Hi! where are you? How are you?" },
  { autor: AUTHORS.BOT, mess: "Wow!" },
];
export function MessageList() {
  const { chatId } = useParams();
  const [messages, setMessages] = React.useState(initMess);
  const ref = useRef();
  const randomMess = () => {
    return answer[Math.floor(Math.random() * 4)].mess;
  };
  const addMessage = React.useCallback(
    (str) => {
      setMessages((prevMess) => ({
        ...prevMess,
        [chatId]: [
          ...prevMess[chatId],
          {
            id: prevMess[chatId].length + 1,
            date: format(new Date(), "yyyy-MM-dd HH:MM:SS"),
            ...str,
          },
        ],
      }));
    },
    [chatId]
  );

  React.useEffect(() => {
    const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];
    let timeout = null;
    if (messages[chatId]?.length && lastMessage.autor === AUTHORS.USER) {
      timeout = setTimeout(() => {
        addMessage({
          id: messages[chatId]?.length + 1,
          autor: AUTHORS.BOT,
          mess: randomMess(),
        });
      }, 1000);
    }
    return () => clearTimeout(timeout);
  });
  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);
  return (
    <>
      <div ref={ref} className="chat" id="element">
        {messages[chatId]?.map(({ id, autor, mess, date }) => (
          <div className={autor === "user" ? "message" : "companion"} key={id}>
            <h2>{autor}</h2>
            {mess}
            <p>{date}</p>
          </div>
        ))}
      </div>
      <div className="inputbox">
        <Message strMessage={addMessage} />
      </div>
    </>
  );
}
