import React from "react";
import Link from "next/link";
import { Table, Button, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { ICraft } from "@/types";

interface ICraftTableProps {
  crafts: ICraft[];
  handleDelete: (id: string) => void;
  loading: boolean;
}

const CraftTable: React.FC<ICraftTableProps> = ({
  crafts,
  handleDelete,
  loading,
}) => {
  const columns = [
    {
      title: "Craft Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "50%",
    },
    {
      title: "Price (LKR)",
      dataIndex: "price",
      key: "price",
      width: "10%",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: "10%",
    },
    {
      key: "action",
      width: "10%",
      align: "right",
      render: (text: any, record: any) => (
        <span>
          <Link href={`/dashboard/crafts/edit/${record._id}`}>
            <Button shape="circle" icon={<EditOutlined />} className="mr-3" />
          </Link>
          <Popconfirm
            title="Delete this craft"
            description="Are you sure to delete this craft?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <Button
              shape="circle"
              type="primary"
              danger
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className="mt-4">
      <Table
        dataSource={crafts}
        // @ts-ignore
        columns={columns}
        loading={loading}
        rowKey={(record) => record._id}
      />
    </div>
  );
};

export default CraftTable;
