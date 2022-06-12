import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AUTHORS } from "../utils/constants";
// import { format } from "date-fns";
import { Message } from "./message/Message";
import { addMessageStore } from "../../store/messages";

// const initMess = { ch_id1: [], ch_id2: [], ch_id3: [], ch_id4: [] };
const answer = [
  { autor: AUTHORS.BOT, mess: "Hi!" },
  { autor: AUTHORS.BOT, mess: "How are you?" },
  { autor: AUTHORS.BOT, mess: "Hi! where are you? How are you?" },
  { autor: AUTHORS.BOT, mess: "Wow!" },
];
export function MessageList() {
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const messages = useSelector(
    (state) => state.messages.messages[chatId] ?? []
  );
  // console.log(messages);
  // const [messages, setMessages] = React.useState(initMess);
  const ref = useRef();
  const randomMess = () => {
    return answer[Math.floor(Math.random() * 4)].mess;
  };
  const addMessage = React.useCallback(
    (str) => {
      dispatch(addMessageStore({ [chatId]: [str] }));

      // console.log("MESS", { [chatId]: str });
      // dispatch(addMessageStore(mess));
      // setMessages((prevMess) => ({
      //   ...prevMess,
      //   [chatId]: [
      //     ...prevMess[chatId],
      //     {
      //       id: prevMess[chatId].length + 1,
      //       date: format(new Date(), "yyyy-MM-dd HH:MM:SS"),
      //       ...str,
      //     },
      //   ],
      // }));
    },
    [chatId, dispatch]
  );

  React.useEffect(() => {
    const lastMessage = messages?.[messages?.length - 1];
    let timeout = null;
    if (messages?.length && lastMessage.autor === AUTHORS.USER) {
      timeout = setTimeout(() => {
        addMessage({
          id: messages?.length + 1,
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
      {/* {console.log(messages)} */}
      <div ref={ref} className="chat" id="element">
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
