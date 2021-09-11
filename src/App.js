import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
