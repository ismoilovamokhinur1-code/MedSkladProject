import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Pill, Building, Boxes, Users, BarChart2, Settings } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Медикаменты", icon: <Pill size={20} /> , path: "/dashboard/products"},
  { name: "Филиалы", icon: <Building size={20} />, path: "/dashboard/branches"},
  { name: "Склад", icon: <Boxes size={20} />, path: "/dashboard/stock"},
  { name: "Движение товаров", icon: <BarChart2 size={20} />, path: "/dashboard/movements"},
  { name: "Сотрудники", icon: <Users size={20} />, path: "/dashboard/employees"},
  { name: "Отчеты", icon: <BarChart2 size={20} />, path: "/dashboard/reports"},
  { name: "Настройки", icon: <Settings size={20} />, path: "/dashboard/settings"},
];

const Sidebar = () => {
  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-64 bg-white shadow-md flex flex-col"
    >
      <div className="text-2xl font-bold text-blue-700 p-6">
        <Link to="/dashboard">МедСклад</Link>
        </div>

      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 text-gray-700 hover:bg-blue-100 transition-colors ${
                isActive ? "bg-blue-200 font-semibold" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
