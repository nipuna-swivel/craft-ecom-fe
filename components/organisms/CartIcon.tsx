import React from "react";
import { Badge } from "antd";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";

interface ICartIconProps {
  itemsCount: number;
  totalPrice: number;
}

const CartIcon: React.FC<ICartIconProps> = ({ itemsCount, totalPrice }) => {
  return (
    <div className="flex items-center justify-end">
      <Link href="/cart">
        <div>
          <Badge count={itemsCount} color={"blue"} showZero>
            <ShoppingCartOutlined style={{ fontSize: 35 }} />
          </Badge>
        </div>
      </Link>
      <div className="ml-3">LKR {totalPrice}</div>
    </div>
  );
};

export default CartIcon;
