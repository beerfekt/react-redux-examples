import React from "react";
import { Provider } from "react-redux";
import store from "../store/create-store";

import Counter from "./building_blocks/counter/container";
import TextForm from "./building_blocks/textform/container";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <TextForm />
    </Provider>
  );
};

export default App;
