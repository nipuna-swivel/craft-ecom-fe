"use client";

import React from "react";
import CustomerLayoutHeader from "@/components/organisms/CustomerLayoutHeader";

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="container mx-auto px-20">
        <CustomerLayoutHeader />
        {children}
      </body>
    </html>
  );
};

export default CustomerLayout;
