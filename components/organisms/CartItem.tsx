import React from "react";
import { InputNumber } from "antd";
import { ICartItem } from "@/types";
import { CloseCircleOutlined } from "@ant-design/icons";

interface ICartItemProps {
  item: ICartItem;
  handleRemove: (id: string) => void;
  handleQuantityUpdate: (id: string, quantity: number) => void;
}

const CartItem: React.FC<ICartItemProps> = ({
  item,
  handleRemove,
  handleQuantityUpdate,
}) => {
  return (
    <div className="grid grid-cols-[40%,20%,20%,20%] gap-4">
      <div className="flex items-center p-2 font-semibold">
        <CloseCircleOutlined
          className="mr-4"
          onClick={() => handleRemove(item._id)}
        />
        <span className="whitespace-nowrap truncate">{item.name}</span>
      </div>
      <div className="flex items-center justify-center p-2 font-semibold">
        LKR {item.price}
      </div>
      <div className="flex items-center justify-center p-2 font-semibold">
        <InputNumber
          min={1}
          max={item.stock}
          defaultValue={item.quantity}
          onChange={(value) => value && handleQuantityUpdate(item._id, value)}
        />
      </div>
      <div className="flex items-center justify-center p-2 font-semibold">
        LKR {item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
