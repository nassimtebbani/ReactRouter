import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import "./index.css";
import Details from "./components/Details";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movies/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
