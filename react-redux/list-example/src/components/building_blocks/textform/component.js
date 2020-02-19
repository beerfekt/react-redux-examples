import React from "react";

import FormInputEnterTextComponent from "../../controls/form_input_enter_text/component";

const TextForm = ({ textForm, onAddToList }) => {
  // console.log(typeof onSetText);
  return (
    <div>
      <FormInputEnterTextComponent
        type={"text"}
        placeholder={"send inverted text via enter"}
        onEnter={onAddToList}
      />
    </div>
  );
};

export default TextForm;
