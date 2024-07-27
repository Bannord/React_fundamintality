import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Error from "./pages/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
