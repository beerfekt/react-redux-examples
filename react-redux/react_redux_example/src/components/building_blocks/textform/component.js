import React from "react";

import FormInputTextComponent from "../../controls/form_input_text/component";
import FormInputEnterTextComponent from "../../controls/form_input_enter_text/component";

const TextForm = ({ textForm, onSetText, onAddToList }) => {
  // console.log(typeof onSetText);

  //list-component
  const listItems = textForm.list.map(item => <li key={item}>{item}</li>);

  return (
    <div>
      <form>
        <FormInputTextComponent
          type={"text"}
          placeholder={"insert Text here"}
          value={textForm.text}
          onChange={onSetText}
        />
      </form>
      <FormInputEnterTextComponent
        type={"text"}
        placeholder={"send inverted text via enter"}
        value={textForm.text}
        onEnter={onAddToList}
        onInputChange={onSetText}
      />
      <p>{textForm.text}</p>

      <ul>{listItems}</ul>
    </div>
  );
};

export default TextForm;
