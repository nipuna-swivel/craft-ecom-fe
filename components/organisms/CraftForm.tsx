import React, { useState, useEffect } from "react";
import { UploadOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Upload, message, Badge } from "antd";
import { validateImageSize, validateImageType } from "@/utils/validators";
import { ICraft } from "@/types";

const { TextArea } = Input;

interface CraftFormProps {
  loading: boolean;
  handleSuccess: (values: any) => void;
  craft?: ICraft | null;
}

const CraftForm: React.FC<CraftFormProps> = ({
  loading,
  handleSuccess,
  craft,
}) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (craft) {
      setImageUrl(craft.image);
      form.setFieldsValue({
        name: craft.name,
        description: craft.description,
        price: craft.price,
        stock: craft.stock,
      });
    }
  }, [craft, form]);

  const handleUpload = (file: File) => {
    const isValidType = validateImageType(file);
    if (!isValidType) {
      message.error("You can only upload JPG/PNG file!");
      return Upload.LIST_IGNORE;
    }

    const isValidSize = validateImageSize(file);
    if (!isValidSize) {
      message.error("Image must smaller than 2MB!");
      return Upload.LIST_IGNORE;
    }

    const objectURL = URL.createObjectURL(file);

    setImage(file);
    setImageUrl(objectURL);

    //return false to prevent antd default upload action
    return false;
  };

  const handleRemoveImage = () => {
    setImageUrl(null);
    setImage(null);
  };

  const handleFinish = (values: any) => {
    const formData = new FormData();
    // @ts-ignore
    formData.append("image", image);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("stock", values.stock);

    handleSuccess(formData);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      style={{ maxWidth: 1000 }}
      onFinish={handleFinish}
    >
      <div className="grid grid-cols-2 gap-7">
        <div>
          <Form.Item
            label="Name"
            name="name"
            required
            rules={[{ required: true, message: "Craft name is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            required
            rules={[{ required: true, message: "Description is required" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Price (LKR)"
            name="price"
            required
            rules={[{ required: true, message: "Price is required" }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Stock"
            name="stock"
            required
            rules={[{ required: true, message: "Stock is required" }]}
          >
            <InputNumber />
          </Form.Item>
        </div>
        <div>
          <Badge
            count={
              imageUrl ? (
                <CloseCircleOutlined onClick={handleRemoveImage} />
              ) : null
            }
          >
            <img
              src={imageUrl || "https://placehold.co/500x300"}
              style={{ minWidth: 500, maxWidth: 300 }}
              alt=""
            />
          </Badge>
          <Form.Item
            name="image"
            required
            rules={[
              {
                required: true,
                validator: (rule, value) => {
                  if (!imageUrl) {
                    return Promise.reject("Image is required");
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Upload
              beforeUpload={handleUpload}
              showUploadList={false}
              fileList={[]}
            >
              {!image && (
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              )}
            </Upload>
          </Form.Item>

          <div className="flex justify-end">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="ml-2"
                loading={loading}
              >
                Save
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default CraftForm;
