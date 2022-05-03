import React from "react";
import { Message } from "./Message";
import Input from "./input";
import Select from "./select";

export default function App() {
  return (
    <div className="wrapper-chat">
      <div className="header">
        <Select />
      </div>
      <div className="chat" id="element">
        <Message
          message="Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta
        obcaecati deserunt nobis suscipit eaque? "
        />
      </div>
      <div className="inputbox">
        <Input />
      </div>
    </div>
  );
}
