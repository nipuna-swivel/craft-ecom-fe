import React from "react";
import Link from "next/link";
import { ICartItem } from "@/types";
import CartDrawerItem from "@/components/organisms/CartDrawerItem";
import { Drawer, Divider, Button, Empty } from "antd";

interface ICartDrawerProps {
  open: boolean;
  onClose: () => void;
  removeItem: (id: string) => void;
  cartItems: ICartItem[];
  totalPrice: number;
}

const CartDrawer: React.FC<ICartDrawerProps> = ({
  open,
  cartItems,
  onClose,
  totalPrice,
  removeItem,
}) => {
  return (
    <Drawer
      title="Shopping Cart"
      placement="right"
      closable
      onClose={onClose}
      open={open}
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartDrawerItem
                key={item._id}
                item={item}
                removeItem={removeItem}
              />
            ))
          ) : (
            <Empty description="Cart is empty" />
          )}
        </div>
        {cartItems.length > 0 && (
          <div>
            <Divider />
            <div className="flex justify-between">
              <span className="font-semibold text-xl">Subtotal:</span>
              <span className="text-sky-500 font-semibold text-xl">
                LKR {totalPrice}
              </span>
            </div>
            <div className="py-2">
              <Link href="/cart">
                <Button
                  size={"large"}
                  shape={"round"}
                  style={{ width: "100%" }}
                >
                  View cart
                </Button>
              </Link>
            </div>
            <div className="py-2">
              <Link href="/checkout">
                <Button
                  type="primary"
                  size={"large"}
                  shape={"round"}
                  style={{ width: "100%" }}
                >
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
