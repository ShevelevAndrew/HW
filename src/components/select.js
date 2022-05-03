import React from "react";

function Select() {
  const [value, setValue] = React.useState("chat1");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select className="combobox" onChange={handleChange} value={value}>
        <option value="chat1">chat1</option>
        <option value="chat2">chat2</option>
        <option value="chat3">chat3</option>
        <option value="chat4">chat4</option>
      </select>
      <p>{value} selected </p>
    </div>
  );
}

export default Select;
