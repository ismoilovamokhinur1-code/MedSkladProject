import React from "react";
import CountUp from "react-countup";

const StatCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded p-4 flex flex-col items-start">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold text-blue-700">
        <CountUp end={value} duration={1.5} separator="," />
      </p>
    </div>
  );
};

export default StatCard;
