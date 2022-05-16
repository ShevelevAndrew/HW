import React from "react";
import { AUTHORS } from "./utils/constants";
import Input from "./input";

export const Message = ({ strMessage }) => {
  const sendMessage = (newMessage) => {
    strMessage({ autor: AUTHORS.USER, mess: newMessage });
  };
  return (
    <div>
      <Input onAddMessage={sendMessage} />
    </div>
  );
};
