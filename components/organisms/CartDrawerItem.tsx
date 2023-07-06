import React from "react";
import { Badge } from "antd";
import { ICartItem } from "@/types";
import { CloseCircleOutlined } from "@ant-design/icons";

interface ICartDrawerItemProps {
  item: ICartItem;
  removeItem: (id: string) => void;
}

const CartDrawerItem: React.FC<ICartDrawerItemProps> = ({
  item,
  removeItem,
}) => {
  return (
    <Badge
      count={<CloseCircleOutlined onClick={() => removeItem(item._id)} />}
      className="max-w-full drawer_cart_item"
    >
      <div className="grid grid-cols-[30%,70%] rounded-lg border-solid border border-gray-200 hover:bg-gray-100 drawer_cart_item_body">
        <div>
          <img src={item.image} alt="product" className="w-full h-full" />
        </div>
        <div className="p-2 flex flex-col justify-center">
          <div className="text-lg font-semibold whitespace-nowrap truncate">
            {item.name}
          </div>
          <div> {`LKR ${item.price} x ${item.quantity}`}</div>
        </div>
      </div>
    </Badge>
  );
};

export default CartDrawerItem;
