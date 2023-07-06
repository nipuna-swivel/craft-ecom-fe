import React from "react";
import { Divider } from "antd";
import { ICartItem } from "@/types";

interface IOrderDetailsCardProps {
  totalPrice: number;
  items: ICartItem[];
}

const OrderDetailsCard: React.FC<IOrderDetailsCardProps> = ({
  totalPrice,
  items,
}) => {
  return (
    <div className="border-solid border-4 p-4">
      <p className="font-semibold text-2xl text-center">Your Order</p>
      <div className="flex justify-between">
        <div className="font-semibold">Product</div>
        <div className="font-semibold">Subtotal</div>
      </div>

      {items.map((item) => (
        <div className="flex justify-between rounded" key={item._id}>
          <div>{`${item.name} x ${item.quantity}`}</div>
          <div>LKR {item.quantity * item.price}</div>
        </div>
      ))}
      <Divider />
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Total:</span>
        <span className="text-sky-500 font-semibold text-xl">
          LKR {totalPrice}
        </span>
      </div>
    </div>
  );
};

export default OrderDetailsCard;
