import React, { useEffect, useRef, useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import styled from "@emotion/styled";
import { Send } from "@mui/icons-material";

const InputStyles = styled(Input)({
  color: "#000",
  padding: "10px 1px",
  fontSize: "20px",
});

export default function InputField({ onAddMessage }) {
  const [value, setValue] = useState("");
  const ref = useRef();
  const sendMessage = () => {
    if (value) {
      onAddMessage(value);
      setValue("");
      ref.current?.focus();
    }
  };
  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handlePressInput = ({ code }) => {
    if (code === "Enter" || code === "NumpadEnter") {
      sendMessage();
    }
  };

  return (
    <div>
      <InputStyles
        inputRef={ref}
        placeholder="enter message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Message"
        fullWidth={true}
        variant="outlined"
        onKeyDown={handlePressInput}
        endAdornment={
          <InputAdornment position="end">
            {value && <Send onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </div>
  );
}
