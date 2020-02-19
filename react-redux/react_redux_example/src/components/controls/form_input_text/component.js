import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid red;
`;

const FormInputTextComponent = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  inverted = false
}) => {
  return (
    <StyledInput
      inverted={inverted}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => {
        onChange(e.target.value);
      }}
    />
  );
};

export default FormInputTextComponent;
