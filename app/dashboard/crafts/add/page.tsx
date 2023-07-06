"use client";

import { message } from "antd";
import CraftForm from "@/components/organisms/CraftForm";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { addNewCraft } from "@/features/craft/craftSlice";

const AddCraftPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading } = useAppSelector((state) => state.craft);

  const handleAddCraft = async (values: any) => {
    try {
      const result = await dispatch(addNewCraft(values));
      if (result?.error) {
        return message.error(result?.payload);
      }
      //if craft is added successfully redirect to craft list
      router.push("/dashboard/crafts");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <CraftForm loading={loading} handleSuccess={handleAddCraft} />
    </div>
  );
};

export default AddCraftPage;
