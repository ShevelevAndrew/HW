import React from "react";
import { AUTHORS } from "../../utils/constants";
import InputField from "../input";

export const Message = ({ strMessage }) => {
  const sendMessage = (newMessage) => {
    strMessage({ autor: AUTHORS.USER, mess: newMessage });
  };
  return (
    <>
      <InputField onAddMessage={sendMessage} />
    </>
  );
};
