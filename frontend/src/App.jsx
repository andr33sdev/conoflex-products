import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css'

import ProductPanel from './components/ProductPanel'
import RawMaterialPanel from "./components/RawMaterialPanel";

function App() {

  return (
    <Router>
      <div className='bg-gradient-to-r from-blue-100 to-sky-200 h-screen w-screen flex justify-center items-center'>
        <Routes>
          <Route path="/products" element={<ProductPanel />}/>
          <Route path="/raw-materials" element={<RawMaterialPanel />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
