import React from "react";
import StatisticsPage from "./_components/stats_landing";
import Allstats from "./_components/allstats";
import StatisticsError from "./_components/nostats";

const Statistics = () => {
  return (
    <div className="bg-[#F6F5F4]">
      <StatisticsError/>
      <StatisticsPage />
      <Allstats/>
    </div>
  );
};

export default Statistics;
