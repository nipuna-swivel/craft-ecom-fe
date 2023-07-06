"use client";

import OrdersTable from "@/components/organisms/OrdersTable";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { getAllOrders } from "@/features/order/orderSlice";

const OrdersPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const { orders, loading } = useAppSelector((state) => state.order);

  return (
    <>
      <OrdersTable orders={orders} loading={loading} />
    </>
  );
};

export default OrdersPage;
