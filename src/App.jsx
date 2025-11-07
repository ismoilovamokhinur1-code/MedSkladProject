import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Overview from "./pages/Dashboard/Overview";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Dashboard/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="products" element={<Products />} />
        {/* <Route path="stock" element={<Stock />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
