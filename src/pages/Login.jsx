import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="w-1/2 flex flex-col justify-center items-center px-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">MedStock ERP</h1>
          <p className="text-lg mb-6 text-gray-300">
            Современная система автоматизации складского учета для медицинских учреждений.
          </p>
          <ul className="text-gray-400 space-y-2">
            <li>✅ Безопасная авторизация пользователей</li>
            <li>✅ Контроль остатков и движение медикаментов</li>
            <li>✅ Удобный и интуитивный интерфейс</li>
          </ul>
        </motion.div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-b from-sky-800/50 to-sky-600/40 p-10 rounded-2xl shadow-lg backdrop-blur-sm w-96"
        >
          <h2 className="text-2xl font-semibold mb-2 text-center">Добро пожаловать</h2>
          <p className="text-sm text-center text-gray-300 mb-6">
            Войдите в свою учетную запись
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Логин"
                className="w-full p-3 rounded-md bg-slate-800/60 text-white outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Пароль"
                className="w-full p-3 rounded-md bg-slate-800/60 text-white outline-none focus:ring-2 focus:ring-sky-400"
                required
              />
            </div>
            <button
              type="submit" 
              className="w-full bg-sky-600 hover:bg-sky-700 transition-all py-3 rounded-md font-semibold text-white shadow-md"
            >
              Войти →
            </button>
          </form>

          <div className="text-center text-sm text-gray-400 mt-4">
            <span className="text-green-400">●</span> Система онлайн
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
