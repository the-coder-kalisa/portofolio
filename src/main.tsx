import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Notfound";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          element={
            <RecoilRoot>
              <App />
            </RecoilRoot>
          }
          path="/"
        />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  </React.StrictMode>
);
