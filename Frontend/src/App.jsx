import React from "react";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Login from "./components/Login"
import Register from "./components/Register"
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;