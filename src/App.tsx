import { Assets as NavigationAssets } from "@react-navigation/elements";
import { DefaultTheme } from "@react-navigation/native";
import { Asset } from "expo-asset";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { Navigation } from "./navigation";
import { store } from "./redux/store";
import { DarkTheme, LightTheme } from "./utils/theme";
import { ThemeProvider } from "./contexts/ThemeContext";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? LightTheme : LightTheme;

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Navigation
          theme={theme}
          linking={{
            enabled: "auto",
            prefixes: [prefix],
          }}
          onReady={() => {
            SplashScreen.hideAsync();
          }}
        />
      </Provider>
    </ThemeProvider>
  );
}
