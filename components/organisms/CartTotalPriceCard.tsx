import React from "react";
import Link from "next/link";
import { Divider, Button } from "antd";

interface ICartTotalPriceCardProps {
  totalPrice: number;
}

const CartTotalPriceCard: React.FC<ICartTotalPriceCardProps> = ({
  totalPrice,
}) => {
  return (
    <div className="border-4 border-solid rounded p-6">
      <p className="font-semibold text-xl">Cart Totals</p>
      <Divider />
      <div className="flex justify-between">
        <span className="font-semibold text-xl">Subtotal:</span>
        <span className="text-sky-500 font-semibold text-xl">
          LKR {totalPrice}
        </span>
      </div>
      <Link href="/checkout">
        <Button
          size={"large"}
          shape={"round"}
          type="primary"
          className="w-full mt-5"
        >
          Proceed to checkout
        </Button>
      </Link>
    </div>
  );
};

export default CartTotalPriceCard;
