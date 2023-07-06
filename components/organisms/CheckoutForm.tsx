import React from "react";
import { Form, Input, Button } from "antd";
import { validatePhoneNumber, validateEmail } from "@/utils/validators";

interface ICheckoutFormProps {
  handleFormSubmit: (values: any) => void;
}

const CheckoutForm: React.FC<ICheckoutFormProps> = ({ handleFormSubmit }) => {
  const onFinish = (values: any) => {
    handleFormSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="p-4">
      <p className="font-semibold text-2xl mb-4">Billing Details</p>
      <Form
        name="checkout"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Delivery Address"
          name="deliveryAddress"
          rules={[{ required: true, message: "Please enter delivery address" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[{ required: true, message: "Please enter postal code" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "" },
            {
              validator: (_, value) => {
                return validatePhoneNumber(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error());
              },
              message: "Invalid phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "" },
            {
              validator: (_, value) => {
                return validateEmail(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error());
              },
              message: "Invalid email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="mt-4"
          >
            Place Order
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutForm;
