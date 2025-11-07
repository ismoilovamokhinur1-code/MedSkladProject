import React from "react";
import { Bell, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="flex items-center justify-between bg-white p-4 shadow"
    >
      <div className="text-xl font-bold text-blue-700">Панель управления</div>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer hover:text-blue-600" />
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <User />
          <span>Администратор</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
