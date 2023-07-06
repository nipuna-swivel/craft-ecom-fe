"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "antd";
import CraftTable from "@/components/organisms/CraftTable";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchCrafts, deleteCraftById } from "@/features/craft/craftSlice";

const CraftsPage = () => {
  const dispatch = useAppDispatch();
  const { loading, crafts } = useAppSelector((state) => state.craft);

  useEffect(() => {
    dispatch(fetchCrafts("ALL"));
  }, [dispatch]);

  const handleDeleteCraft = (id: string) => {
    dispatch(deleteCraftById(id));
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-end">
        <Link href="/dashboard/crafts/add">
          <Button type="primary">Add New</Button>
        </Link>
      </div>
      <CraftTable
        loading={loading}
        crafts={crafts}
        handleDelete={handleDeleteCraft}
      />
    </div>
  );
};

export default CraftsPage;
