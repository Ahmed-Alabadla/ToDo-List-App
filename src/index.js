import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "flowbite";
import { Provider } from "react-redux";
import store from "./redux/store";
// import axios from "axios";

// const dataUser = localStorage.getItem("user");
// const foundUser = JSON.parse(dataUser);

// axios.defaults.baseURL = "https://tasks-todo-list-api.000webhostapp.com/api/";
// axios.defaults.headers.common["Authorization"] = "Bearer " + foundUser.token;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
