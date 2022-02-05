import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Productos";
import Add from "./components/Agregar";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Agregar" element={<Add/>} />
          <Route path="/Productos" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
