import React from "react";
import { Divider } from "antd";
import { ICartItem } from "@/types";
import CartItem from "@/components/organisms/CartItem";
import { useAppDispatch } from "@/hooks";
import { removeFromCart, updateQuantity } from "@/features/cart/cartSlice";

interface ICartItemsProps {
  items: ICartItem[];
}
const CartItems: React.FC<ICartItemsProps> = ({ items }) => {
  const dispatch = useAppDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <>
      <div className="grid grid-cols-[40%,20%,20%,20%] gap-4">
        <div className="flex items-center justify-center p-2 font-semibold text-lg">
          Product
        </div>
        <div className="flex items-center justify-center p-2 font-semibold text-lg">
          Price
        </div>
        <div className="flex items-center justify-center p-2 font-semibold text-lg">
          Quantity
        </div>
        <div className="flex items-center justify-center p-2 font-semibold text-lg">
          Subtotal
        </div>
      </div>
      <Divider />
      {items.map((item) => (
        <CartItem
          key={item._id}
          item={item}
          handleRemove={handleRemove}
          handleQuantityUpdate={handleQuantityChange}
        />
      ))}
    </>
  );
};

export default CartItems;
