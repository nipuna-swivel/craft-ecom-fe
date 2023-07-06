import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface ICraftCardProps {
  image: string;
  name: string;
  price: number;
}

const CraftCard: React.FC<ICraftCardProps> = ({ image, price, name }) => {
  return (
    <Card
      className="m-2"
      hoverable
      style={{ width: 320 }}
      cover={<img alt="craft-image" src={image} style={{ height: 300 }} />}
    >
      <Meta
        title={<div className="font-semibold text-xl">{name}</div>}
        description={<div className="font-semibold text-lg">LKR {price}</div>}
      />
    </Card>
  );
};

export default CraftCard;
