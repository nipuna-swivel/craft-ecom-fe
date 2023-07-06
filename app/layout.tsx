"use client";

import "./globals.css";
import { store } from "@/store";
import { Provider } from "react-redux";
import { RootStyleRegistry } from "./antd";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootStyleRegistry>
          <Provider store={store}>{children}</Provider>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
