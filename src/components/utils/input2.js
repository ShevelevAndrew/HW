//Оставил как пример использования input form
import React from "react";
import { IconButton, Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

function InputField({ onAddMessage }) {
  const [value, setValue] = React.useState("");
  const ref = React.useRef();
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      onAddMessage(value);
      setValue("");
      ref.current?.focus();
    }
  };
  React.useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Input
          type="text"
          inputRef={ref}
          value={value}
          onChange={handleChange}
          label="Message"
          fullWidth={false}
          variant="outlined"
          endAdornment={
            <InputAdornment position="end" children={IconButton}>
              <Send onClick={handleSubmit} />
            </InputAdornment>
          }
        />
        {/* <button type="submit">send</button> */}
      </form>
    </div>
  );
}

export default InputField;
