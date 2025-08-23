import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "react-native";
import bell from "../assets/bell.png";
import newspaper from "../assets/newspaper.png";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Settings } from "./screens/Settings";
import { Updates } from "./screens/Updates";
import { NotFound } from "./screens/NotFound";
import {
  House,
  MapIcon,
  MapPinCheckInside,
  UserRound,
} from "lucide-react-native";
import { Map } from "./screens/Map";
import { Visited } from "./screens/Visited";
import { PlaceDetail } from "./screens/PlaceDetail";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (props) => <House {...props} strokeWidth={1.5} />,
      },
    },
    Map: {
      screen: Map,
      options: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (props) => <MapIcon {...props} strokeWidth={1.5} />,
      },
    },
    Visited: {
      screen: Visited,
      options: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (props) => (
          <MapPinCheckInside {...props} strokeWidth={1.5} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      options: {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (props) => <UserRound {...props} strokeWidth={1.5} />,
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Historical Places",
        headerShown: true,
      },
    },
    PlaceDetail: {
      screen: PlaceDetail,
      linking: {
        path: ":id",
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ":user(@[a-zA-Z0-9-_]+)",
        parse: {
          user: (value) => value.replace(/^@/, ""),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: "modal",
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

export type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
