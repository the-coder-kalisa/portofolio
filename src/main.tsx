import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/Notfound";
import Code from "./Code";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Code />} path="/" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Router>
  </React.StrictMode>
);
