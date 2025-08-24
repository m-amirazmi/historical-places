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
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ThemeProvider, useThemeContextContext } from "./contexts/ThemeContext";
import { customEvaTheme } from "./utils/theme";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

function AppContent() {
  const { theme } = useThemeContextContext();
  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...customEvaTheme }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation
            linking={{
              enabled: "auto",
              prefixes: [prefix],
            }}
            onReady={() => {
              SplashScreen.hideAsync();
            }}
          />
        </SafeAreaProvider>
      </Provider>
    </ApplicationProvider>
  );
}

export function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </>
  );
}
