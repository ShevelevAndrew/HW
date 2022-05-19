import React from "react";
import { AUTHORS } from "./utils/constants";
import { format } from "date-fns";
import { Message } from "./Message";

const initMess = [];
const answer = [
  { autor: AUTHORS.BOT, mess: "Hi!" },
  { autor: AUTHORS.BOT, mess: "How are you?" },
  { autor: AUTHORS.BOT, mess: "where are you?" },
  { autor: AUTHORS.BOT, mess: "Wow!" },
];
export default function MessageField() {
  const [messages, setMessage] = React.useState(initMess);
  const randomMess = () => {
    return answer[Math.floor(Math.random() * 4)];
  };
  const addMessage = React.useCallback((str) => {
    setMessage((prevMess) => [
      ...prevMess,
      {
        id: prevMess.length + 1,
        date: format(new Date(), "yyyy-MM-dd HH:MM:SS"),
        ...str,
      },
    ]);
  }, []);

  React.useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timeout = null;
    if (messages.length && lastMessage?.autor === AUTHORS.USER) {
      timeout = setTimeout(() => {
        addMessage(randomMess());
      }, 1000);
    }
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className="chat" id="element">
        {messages?.map(({ id, autor, mess, date }) => (
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
