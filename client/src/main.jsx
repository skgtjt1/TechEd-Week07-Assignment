import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

//I can wrap my app with browser routers here, I will build my routes in the root component (app or home)

//routes should wrap you new Route
//Route has to attributes, path: for you params, and element, for the component you want to render in that path
//for user navigation, separately, you will have link components
//the link component has an attribute called to=""" to specify the params we are navigating to.
