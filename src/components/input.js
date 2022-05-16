import React from "react";

function Input({ onAddMessage }) {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMessage(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          label="Message"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Input;
