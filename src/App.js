import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Productos";
import Add from "./components/Agregar";
import Index from "./components/Index";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Agregar" element={<Add/>} />
          <Route path="/Productos" element={<Products/>} />
          <Route path="/" element={<Index/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

