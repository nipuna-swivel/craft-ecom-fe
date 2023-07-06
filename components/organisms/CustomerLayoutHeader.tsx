import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks";
import React, { useState, useEffect } from "react";
import SearchBox from "@/components/molecules/SearchBox";
import CartIcon from "@/components/organisms/CartIcon";
import { fetchCrafts } from "@/features/craft/craftSlice";

const CustomerLayoutHeader = () => {
  const [searchValue, setSearchValue] = useState<string>("ALL");
  const { cartItems, totalPrice } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    getCrafts();
  }, [searchValue]);

  const getCrafts = () => {
    dispatch(fetchCrafts(searchValue));
  };

  return (
    <div className="flex items-center py-8">
      <div className="basis-1/4 text-xl font-semibold">
        <Link href="/">Handmade Crafts</Link>
      </div>
      <div className="basis-1/2">
        <SearchBox
          placeholder={"Search for crafts"}
          onSearch={(value) => setSearchValue(value)}
          style={{ width: "100%" }}
          size={"large"}
        />
      </div>
      <div className="basis-1/4">
        <CartIcon itemsCount={cartItems.length} totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default CustomerLayoutHeader;
