import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid red;
`;

//hook + controlled components

const FormInputEnterTextComponent = ({
  type = "text",
  placeholder = "",
  onEnter,
  inverted = false
}) => {
  //Hook1
  const [text, setText] = useState("");

  return (
    <StyledInput
      inverted={inverted}
      type={type}
      placeholder={placeholder}
      value={text}
      onChange={event => {
        setText(event.target.value);
      }}
      onKeyPress={event => {
        if (
          event.which === 13 ||
          event.key === "Enter" ||
          event.charCode === 13
        ) {
          console.log(event.key + " event.charCode " + event.charCode);
          onEnter(text);
          return false;
        }
      }}
    />
  );
};

export default FormInputEnterTextComponent;
