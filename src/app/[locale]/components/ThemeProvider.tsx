"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { customTheme } from "./theme"; // Importez votre configuration de thème

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={customTheme}>{children}</ConfigProvider>;
}
