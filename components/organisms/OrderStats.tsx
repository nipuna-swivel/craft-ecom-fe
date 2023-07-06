import React from "react";
import { Statistic } from "antd";

interface IOrderStats {
  totalSales: number;
  totalOrders: number;
  totalSoldCrafts: number;
}

const OrderStats: React.FC<IOrderStats> = ({
  totalSales,
  totalOrders,
  totalSoldCrafts,
}) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex justify-center">
        <Statistic title="Total Sales (LKR)" value={totalSales} />
      </div>
      <div className="flex justify-center">
        <Statistic title="Total Orders" value={totalOrders} />
      </div>
      <div className="flex justify-center">
        <Statistic title="Total Crafts Sold" value={totalSoldCrafts} />
      </div>
    </div>
  );
};

export default OrderStats;
