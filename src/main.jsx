import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { ChoosePlan } from "./components/Choose-Plan";
import { Cards } from "./components/Cards";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <ChoosePlan />
    <Cards />
  </React.StrictMode>
);
