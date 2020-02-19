import React from "react";
import { Provider } from "react-redux";
import store from "../store/create-store";

import TextForm from "./building_blocks/textform/container";
import List from "./building_blocks/list/container";

const App = () => {
  return (
    <Provider store={store}>
      <TextForm />
      <List />
    </Provider>
  );
};

export default App;
