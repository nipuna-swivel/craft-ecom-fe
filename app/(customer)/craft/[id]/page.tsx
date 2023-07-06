"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import CraftDetails from "@/components/templates/CraftDetails";
import CartDrawer from "@/components/organisms/CartDrawer";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
const { fetchCraftById } = require("@/features/craft/craftSlice");

const Craft = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const [showDrawer, setShowDrawer] = useState(false);

  const { craft } = useAppSelector((state) => state.craft);
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCraftById(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (cartItems.length > 0) setShowDrawer(true);
  }, [cartItems]);

  const handleDrawerClose = () => {
    setShowDrawer(false);
  };

  const handleAddToCart = (data: any) => {
    const { quantity } = data;
    dispatch(addToCart({ ...craft, quantity }));
  };

  const removeCartItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <CraftDetails craft={craft} handleAddToCart={handleAddToCart} />
      <CartDrawer
        open={showDrawer}
        cartItems={cartItems}
        totalPrice={totalPrice}
        onClose={handleDrawerClose}
        removeItem={removeCartItem}
      />
    </>
  );
};

export default Craft;
