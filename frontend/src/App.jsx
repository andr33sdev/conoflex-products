import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

import ProductsPage from './pages/ProductsPage'
import RawMaterialsPage from "./pages/RawMaterialsPage";

function App() {

  return (
    <Router>
      <div className='bg-gradient-to-r from-blue-100 to-sky-200 h-screen w-screen flex justify-center items-center'>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/raw-materials" element={<RawMaterialsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
