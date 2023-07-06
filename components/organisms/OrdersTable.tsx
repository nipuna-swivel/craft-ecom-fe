import React from "react";
import { Table } from "antd";
import { IOrder } from "@/types";

interface IOrdersTableProps {
  orders: IOrder[];
  loading: boolean;
}

const OrdersTable: React.FC<IOrdersTableProps> = ({ orders, loading }) => {
  const columns = [
    {
      title: "Customer Name",
      key: "name",
      render: (text: any, record: any) =>
        `${record.firstName} ${record.lastName}`,
    },
    {
      title: "Address",
      key: "deliveryAddress",
      render: (text: any, record: any) =>
        `${record.deliveryAddress} ${record.postalCode}`,
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Total Price (LKR)",
      dataIndex: "orderTotal",
      key: "orderTotal",
    },
    {
      title: "Order",
      key: "order",
      render: (text: any, record: any) => (
        <ul>
          {record.orderItems.map((item: any) => (
            <li key={item.craft._id}>
              {item.craft.name} x {item.quantity}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={orders}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default OrdersTable;
