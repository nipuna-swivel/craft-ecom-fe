import React from "react";
import { Image } from "antd";
import { ICraft } from "@/types";
import AddToCartForm from "@/components/organisms/AddToCartForm";

interface ICraftDetailsProps {
  craft: ICraft | null;
  handleAddToCart: (data: any) => void;
}

const CraftDetails: React.FC<ICraftDetailsProps> = ({
  craft,
  handleAddToCart,
}) => {
  return (
    <div className="flex">
      <div className="basis-3/5">
        <Image src={craft?.image} alt={craft?.name} width={500} height={500} />
      </div>
      <div className="basis-2/5">
        <AddToCartForm craft={craft} handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default CraftDetails;
