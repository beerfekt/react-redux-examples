import React, { useState } from "react";

const FormInputEnterTextComponent = ({
  type = "text",
  placeholder = "",
  value = "",
  onEnter,
  inverted = "false"
}) => {
  const [text, setText] = useState("");

  return (
    <input
      inverted={inverted}
      type={type}
      placeholder={placeholder}
      value={text}
      onChange={e => {
        setText(e.target.value);
      }}
      onKeyPress={event => {
        if (
          event.which === 13 ||
          event.key === "Enter" ||
          event.charCode === 13
        ) {
          console.log(event.key + " event.charCode " + event.charCode);
          onEnter(text);
          setText("");
          return false;
        }
      }}
    />
  );
};

export default FormInputEnterTextComponent;
