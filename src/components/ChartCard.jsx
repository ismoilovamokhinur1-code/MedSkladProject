import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const ChartCard = ({ data }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-gray-700 font-semibold mb-4">Движение товаров (поступления/расходы)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="поступления" stroke="#0077B6" strokeWidth={2} />
          <Line type="monotone" dataKey="расходы" stroke="#00B4D8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartCard;
