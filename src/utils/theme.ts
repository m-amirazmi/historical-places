// theme.ts
import {
  DefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

export const lightColors = {
  base100: "#faf7f5",
  base200: "#efeae6",
  base300: "#e7e2df",
  baseContent: "#291334",
  primary: "#44ebd3",
  primaryContent: "#005d58",
  secondary: "#f9cbe5",
  secondaryContent: "#a0004a",
  accent: "#ffd6a7",
  accentContent: "#9f2d00",
  neutral: "#262629",
  neutralContent: "#e4e4e7",
  info: "#00a4f250",
  infoContent: "#00a4f2",
  success: "#00ba7b50",
  successContent: "#00ba7b",
  warning: "#edaf0050",
  warningContent: "#edaf00",
  error: "#fe1c5550",
  errorContent: "#fe1c55",
};

export const darkColors = {
  base100: "#1a1a1a",
  base200: "#333333",
  base300: "#4d4d4d",
  baseContent: "#e4e4e4",
  primary: "#6d4cdb",
  primaryContent: "#e1bee7",
  secondary: "#d81b60",
  secondaryContent: "#f8bbd0",
  accent: "#e53935",
  accentContent: "#ffebee",
  neutral: "#1e2a47",
  neutralContent: "#e4e4e4",
  info: "#3f51b5",
  infoContent: "#c5cae9",
  success: "#388e3c",
  successContent: "#a5d6a7",
  warning: "#fbc02d",
  warningContent: "#fff59d",
  error: "#e64a19",
  errorContent: "#ffccbc",
};

export const Spacing = {
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(16),
  lg: moderateScale(24),
  xl: moderateScale(32),
  xxl: moderateScale(48),
};

export const FontSize = {
  xs: moderateScale(12),
  sm: moderateScale(14),
  md: moderateScale(16),
  lg: moderateScale(20),
  xl: moderateScale(24),
  xxl: moderateScale(32),
};

export const Radius = {
  sm: moderateScale(4),
  md: moderateScale(8),
  lg: moderateScale(16),
};

// React Navigation Themes
export const LightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    primary: lightColors.primaryContent,
    background: lightColors.base100,
    card: lightColors.base100,
    text: lightColors.baseContent,
    border: lightColors.base200,
    notification: lightColors.secondary,
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  dark: true,
  colors: {
    primary: darkColors.primary,
    background: darkColors.base100,
    card: darkColors.base300,
    text: darkColors.baseContent,
    border: darkColors.base200,
    notification: darkColors.secondary,
  },
};

export const responsiveWidth = (percent: number) => (width * percent) / 100;
export const responsiveHeight = (percent: number) => (height * percent) / 100;
