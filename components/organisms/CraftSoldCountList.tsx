import React from "react";

interface ICraftSoldCountList {
  title: string;
  items: { name: string; quantity: number }[];
}

const CraftSoldCountList: React.FC<ICraftSoldCountList> = ({
  title,
  items,
}) => {
  return (
    <div>
      <div className="font-semibold text-lg mb-2">{title}</div>
      <div>
        {items.map((item) => (
          <div className="grid grid-cols-2 gap-2 mb-1" key={item.name}>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftSoldCountList;
