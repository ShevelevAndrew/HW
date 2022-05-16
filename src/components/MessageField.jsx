import React from "react";
import { AUTHORS } from "./utils/constants";
import { Message } from "./Message";

// const initMess = [{ autor: AUTHORS.USER, mess: "Hi" }];
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
    setMessage((prevMess) => [...prevMess, str]);
  }, []);

  React.useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timeout;
    if (lastMessage?.autor === AUTHORS.USER) {
      timeout = setTimeout(() => {
        addMessage(randomMess());
      }, 1000);
    }
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div className="chat" id="element">
        {messages?.map(({ autor, mess }) => (
          <div className={autor === "user" ? "message" : "companion"}>
            {mess}
          </div>
        ))}
      </div>
      <div className="inputbox">
        <Message strMessage={addMessage} />
      </div>
    </>
  );
}
