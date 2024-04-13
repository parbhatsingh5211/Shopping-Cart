import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { HashRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
      <Provider store={store}>
        <App />
        <Toaster/>
      </Provider>
  </HashRouter>
  
);
