// import React from "react";
// import StatCard from "../../components/StatCard";
// import ChartCard from "../../components/ChartCard";
// import { motion } from "framer-motion";

// const Overview = () => {
//   const stats = [
//     { title: "Всего медикаментов", value: 1250 },
//     { title: "Доступный склад", value: 340 },
//     { title: "Поступления сегодня", value: 45 },
//     { title: "Расход сегодня", value: 30 },
//   ];

//   const chartData = [
//     { name: "Пн", поступления: 30, расходы: 20 },
//     { name: "Вт", поступления: 45, расходы: 25 },
//     { name: "Ср", поступления: 20, расходы: 15 },
//     { name: "Чт", поступления: 50, расходы: 30 },
//     { name: "Пт", поступления: 40, расходы: 35 },
//     { name: "Сб", поступления: 25, расходы: 20 },
//     { name: "Вс", поступления: 35, расходы: 25 },
//   ];

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             <StatCard title={stat.title} value={stat.value} />
//           </motion.div>
//         ))}
//       </div>

//       <div>
//         <ChartCard data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default Overview;


import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Overview = () => {
  const context = useOutletContext();
  const { products = [], setProducts } = context || {};

  const [movements, setMovements] = useState([]);

  useEffect(() => {
    const storedMovements = localStorage.getItem("movements");
    if (storedMovements) setMovements(JSON.parse(storedMovements));
  }, []);

  // Total dorilar soni
  const totalProducts = products.length;

  // Joriy omborda mavjud dorilar umumiy miqdori
  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);

  // Umumiy summa (so‘m)
  const totalSum = products.reduce((sum, p) => sum + (p.price || 0) * p.quantity, 0);

  // Top 5 tez-tez ishlatiladigan dorilar (Расход bo‘yicha)
  const top5 = movements
    .filter(m => m.type === "Расход")
    .reduce((acc, m) => {
      acc[m.productName] = (acc[m.productName] || 0) + m.quantity;
      return acc;
    }, {});
  
  const top5Array = Object.entries(top5)
    .map(([name, quantity]) => ({ name, quantity }))
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 5);

  // Bar chart uchun ma’lumotlar (kunlik kirim/chiqim)
  const chartData = movements
    .map(m => ({ 
      date: new Date(m.date).toLocaleDateString(), 
      type: m.type, 
      quantity: m.quantity 
    }))
    .reduce((acc, m) => {
      const exist = acc.find(a => a.date === m.date);
      if (exist) {
        if (m.type === "Поступление") exist.incoming += m.quantity;
        else exist.outgoing += m.quantity;
      } else {
        acc.push({ date: m.date, incoming: m.type === "Поступление" ? m.quantity : 0, outgoing: m.type === "Расход" ? m.quantity : 0 });
      }
      return acc;
    }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">Обзор склада</h2>

      <div className="grid grid-cols-3 gap-6">
        <motion.div 
          className="bg-white shadow rounded p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-gray-500">Всего медикаментов</h3>
          <p className="text-2xl font-bold">{totalProducts}</p>
        </motion.div>

        <motion.div 
          className="bg-white shadow rounded p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <h3 className="text-gray-500">Всего в наличии (шт)</h3>
          <p className="text-2xl font-bold">{totalQuantity}</p>
        </motion.div>

        <motion.div 
          className="bg-white shadow rounded p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <h3 className="text-gray-500">Общая стоимость (сум)</h3>
          <p className="text-2xl font-bold">{totalSum.toLocaleString()} сум</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <motion.div 
          className="bg-white shadow rounded p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-gray-500 mb-2">Топ 5 расходов по медикаментам</h3>
          <ul className="list-disc list-inside">
            {top5Array.length > 0 ? top5Array.map((item, idx) => (
              <li key={idx}>{item.name}: {item.quantity} шт</li>
            )) : <li>Нет данных</li>}
          </ul>
        </motion.div>

        <motion.div 
          className="bg-white shadow rounded p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="text-gray-500 mb-2">График поступления / расхода</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="incoming" fill="#00B4D8" name="Поступление"/>
              <Bar dataKey="outgoing" fill="#0077B6" name="Расход"/>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;
