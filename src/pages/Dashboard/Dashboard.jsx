import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 overflow-auto">
          <Outlet context={{ products, setProducts }} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

