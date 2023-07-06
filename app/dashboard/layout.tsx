"use client";

import React, { useEffect } from "react";
import {
  ShopOutlined,
  StockOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "@/hooks";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import { logOut } from "@/features/auth/authSlice";
import useAuth from "@/hooks/useAuth";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isAuthenticated, redirect } = useAuth();

  useEffect(() => {
    // //if user is not authenticated, redirect to login page
    if (!isAuthenticated) redirect();
  }, [isAuthenticated, redirect]);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const menuItems = [
    {
      key: 1,
      icon: <ShopOutlined />,
      label: "Crafts",
      onClick: () => router.push("/dashboard/crafts"),
    },
    {
      key: 2,
      icon: <ShoppingCartOutlined />,
      label: "Orders",
      onClick: () => router.push("/dashboard/orders"),
    },
    {
      key: 3,
      icon: <StockOutlined />,
      label: "Analytics",
      onClick: () => router.push("/dashboard/analytics"),
    },
  ];

  const handleLogout = () => {
    dispatch(logOut());
    router.replace("/login");
  };

  if (!isAuthenticated) return;

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Layout className="dashboard-layout">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="demo-logo-vertical">hiiii</div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              items={menuItems}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <div className="flex justify-end items-center h-full">
                <LogoutOutlined
                  className="mr-6 text-xl cursor-pointer"
                  onClick={handleLogout}
                />
              </div>
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                }}
                className="overflow-auto"
              >
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ecommerce App ©2023</Footer>
          </Layout>
        </Layout>
      </body>
    </html>
  );
};

export default DashboardLayout;
