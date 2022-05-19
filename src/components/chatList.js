import React from "react";

const chatlist = [
  { id: "id1", chatname: "Сhat 1", description: "description Chat 1" },
  { id: "id2", chatname: "Сhat 2", description: "description Chat 2" },
  { id: "id3", chatname: "Сhat 3", description: "description Chat 3" },
  { id: "id4", chatname: "Сhat 4", description: "description Chat 4" },
];

function ChatList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select className="combobox" onChange={handleChange} value={value}>
        {chatlist.map(({ id, chatname }) => (
          <option value={chatname} key={id}>
            {chatname}
          </option>
        ))}
      </select>

      <h2>Message list</h2>
    </div>
  );
}

export default ChatList;
