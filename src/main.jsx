import React from "react";
import ReactDOM from "react-dom/client";
//screens
import App from "./App";
import PokemonApp from "./PokemonApp";
import TodoApp from "./TodoApp";
import "./index.css";
//redux
import { Provider } from "react-redux";
//store
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
);
