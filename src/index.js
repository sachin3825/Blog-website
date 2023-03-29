import React from "react";
import ReactDOM from "react-dom/client";
import AppContextProvider from "./Context/AppContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
