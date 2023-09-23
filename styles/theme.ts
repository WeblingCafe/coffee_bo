"use client";

import { DefaultTheme } from "styled-components";

const color = {
  white: "#ffffff",
  lightBlue: "#EFF6FF",
  blue: "#2563EB",
  opacityBlue: "rgba(37, 99, 235, 0.2)",
  blueGray: "#F1F5F9",
  lightGray: "#9CA3AF",
  gray: "#1F2937",
  placeholderGray: "#6D7280",
  black: "#111827",
  border: "#E5E7EB",
};

const font = {
  size: {
    xxs: "1.2rem",
    xs: "1.3rem",
    sm: "1.4rem",
    md: "1.6rem",
    lg: "1.8rem",
    xl: "2.0rem",
    xxl: "2.4rem",
    xxxl: "3.2rem",
  },
  weight: {
    light: 400,
    normal: 500,
    bold: 700,
  },
};

const box = {
  height: {
    sm: "36px",
    md: "40px",
    lg: "48px",
    xl: "52px",
  },
  width: {
    xxs: "58px",
    xs: "62px",
    sm: "80px",
    md: "92px",
    lg: "240px",
    xl: "380px",
  },
};

const padding = "16px";
const layout = {
  padding: `0 ${padding}`,
};

export type ColorsTypes = typeof color;
export type FontTypes = typeof font;
export type BoxTypes = typeof box;
export type PaddingTypes = typeof padding;
export type LayoutTypes = typeof layout;

export const theme: DefaultTheme = {
  font,
  color,
  box,
  padding,
  layout,
} as const;
