import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import NotFound from "./components/Notfound";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
          path="/"
        />
        <Route
          element={
            <Provider store={store}>
              <NotFound />
            </Provider>
          }
          path="*"
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
