import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Sudoku from "./pages/sudoku/Sudoku";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-slate-800 px-10 h-screen w-screen">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/sudoku"} element={<Sudoku />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
