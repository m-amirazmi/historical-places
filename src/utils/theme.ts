// theme.ts
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Radius = {
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
};

export const FontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  huge: 40,
};

// optional helpers for percentage-based responsive sizes
export const responsiveWidth = (percent: number) => (width * percent) / 100;
export const responsiveHeight = (percent: number) => (height * percent) / 100;
