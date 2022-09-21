import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/tailwind.css";

import { ViewHandler } from "./components/views";

const Footer = () => {
  return (
    <div className="mt-2 text-md p-3">
      © 2022 - love.evenjust.com - Love Calculator
      <div className="mt-2 text-md flex justify-center p-2">
        <a href="/" className="px-2 border-r-2">
          HomePage
        </a>
        <a href="/terms.html" className="px-2">
          Terms of Use
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(
  <div className="text-center bg-gray-200 h-full">
    <ViewHandler />
    <Footer />
  </div>,
  document.getElementById("root")
);
