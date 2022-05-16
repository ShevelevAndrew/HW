import React from "react";
import MessageField from "./MessageField";
import Select from "./select";

export default function App() {
  return (
    <div className="wrapper-chat">
      <div className="header">
        <Select />
      </div>
      <MessageField />
    </div>
  );
}
