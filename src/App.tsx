import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Navigation } from "./navigation";
import { store } from "./redux/store";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL("/");

export function App() {
  return (
    <>
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
    </>
  );
}
