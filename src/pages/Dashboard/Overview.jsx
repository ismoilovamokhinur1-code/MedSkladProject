import React from "react";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import { motion } from "framer-motion";

const Overview = () => {
  const stats = [
    { title: "Всего медикаментов", value: 1250 },
    { title: "Доступный склад", value: 340 },
    { title: "Поступления сегодня", value: 45 },
    { title: "Расход сегодня", value: 30 },
  ];

  const chartData = [
    { name: "Пн", поступления: 30, расходы: 20 },
    { name: "Вт", поступления: 45, расходы: 25 },
    { name: "Ср", поступления: 20, расходы: 15 },
    { name: "Чт", поступления: 50, расходы: 30 },
    { name: "Пт", поступления: 40, расходы: 35 },
    { name: "Сб", поступления: 25, расходы: 20 },
    { name: "Вс", поступления: 35, расходы: 25 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard title={stat.title} value={stat.value} />
          </motion.div>
        ))}
      </div>

      <div>
        <ChartCard data={chartData} />
      </div>
    </div>
  );
};

export default Overview;
