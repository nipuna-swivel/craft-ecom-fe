import { useAppSelector, useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { getAnalytics } from "@/features/order/orderSlice";
import OrderStats from "@/components/organisms/OrderStats";
import CraftSoldCountList from "@/components/organisms/CraftSoldCountList";

const Analytics = () => {
  const dispatch = useAppDispatch();
  const { analytics } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(getAnalytics());
  }, [dispatch]);

  return (
    <div>
      <OrderStats
        totalSales={analytics?.totalSales}
        totalOrders={analytics?.totalOrders}
        totalSoldCrafts={analytics?.totalCraftsSold}
      />

      <div className="grid grid-cols-2 mt-4">
        <div className="flex justify-center">
          <CraftSoldCountList
            title="Top 5 best-selling crafts"
            items={analytics?.topFiveCraftsSold}
          />
        </div>
        <div className="flex justify-center">
          <CraftSoldCountList
            title="The count of all crafts sold"
            items={analytics?.craftsSoldCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
