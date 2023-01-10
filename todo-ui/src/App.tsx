import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from "./MainComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Component />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/otherPage" element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Component = () => {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/otherpage"}>Other Page</Link>
    </header>
  );
};

export default App;
