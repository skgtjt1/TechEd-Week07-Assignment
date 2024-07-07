import "./App.css";
// import { useState } from "react";

// import { useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import FormPage from "./pages/FormPage";

//I need a list of shop upgrades for the user to buy

//I need two global variables: one to store the cookie counter, one to store the cookies per second

// stretch goal, fetch API upgrades, maybe make my own API?

// const upgrades = [{}, {}];

export default function App() {
  return (
    <div className="main-page">
      <Header></Header>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userreviews" element={<Posts />} />
          <Route path="/formpage" element={<FormPage />} />
        </Routes>
      </main>
    </div>
  );
}

// const [clicks, setClicks] = useState(0);
// const [cps, setCps] = useState(1);
// const [clicked, setClicked] = useState(false);
//   //   //I need a timer to track the biscuits, keeping an eye on the bps

// function stressClicker() {
//   setClicked(true);
//   setClicks((clicks) => clicks + 1); //skips needing return
//   // console.log(clicks);
// }

// const incrementClicker = useCallback(() => {
//   //Emily suggested this, apparently it stops the increment functions from being re-rendered every time.
//   setClicks((newClicks) => {
//     const newTotal = newClicks + cps;
//     return newTotal;
//   });
// }, [cps]);

// function shopBuy(cost, increase) {
//   if (clicks >= cost) {
//     setClicks((newClicks) => newClicks - cost);
//     setCps((newCps) => newCps + increase);
//   }
// }
