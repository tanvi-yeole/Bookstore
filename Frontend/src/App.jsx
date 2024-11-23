import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
<div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
