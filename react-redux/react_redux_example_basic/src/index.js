import React from "react";
import { render } from "react-dom";
import Counter from "./components/counter/container";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/create-store";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));
