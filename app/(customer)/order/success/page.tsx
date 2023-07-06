"use client";

import Link from "next/link";
import { Result, Button } from "antd";

const OrderSuccessPage = () => {
  return (
    <>
      <Result
        status="success"
        title="Your order has been successfully placed!"
        subTitle="Your order will be delivered within 3-5 business days."
        extra={[
          <Link href="/" key="home">
            <Button>Goto Home</Button>
          </Link>,
        ]}
      />
    </>
  );
};

export default OrderSuccessPage;
