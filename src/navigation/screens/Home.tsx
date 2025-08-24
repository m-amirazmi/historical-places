import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MapPinCheck, MapPinX, Plus, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "..";
import { PlaceCard } from "../../components/PlaceCard";
import { TextInputField } from "../../components/TextInputField";
import { fetchPlaces } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import { NumberCard } from "../../components/NumberCard";
import { Pill } from "../../components/Pill";
import { Layout, Text, useTheme } from "@ui-kitten/components";
import { Spacing } from "../../utils/theme";
import { moderateScale } from "react-native-size-matters";

type Nav = NativeStackNavigationProp<RootStackParamList>;

type FilterType = {
  id: string;
  name: string;
};

const filter: FilterType[] = [
  { id: "all", name: "All" },
  { id: "visited", name: "Visited" },
  { id: "not_visited", name: "Not Visited" },
];

export function Home() {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.places.list);
  const loading = useSelector((state: RootState) => state.places.loading);

  const theme = useTheme();

  const [selectedFilter, setSelectedFilter] = useState<FilterType["id"]>("all");

  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);

  const navigation = useNavigation<Nav>();

  const handlePress = (id: string) => {
    navigation.navigate("PlaceDetail", { id });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout style={{ flex: 1 }}>
          <View
            style={[
              styles.header,
              { backgroundColor: theme["color-primary-200"] },
            ]}
          >
            <View style={styles.headerTextContainer}>
              <Text category="h1">Historical Places</Text>
              <Text category="s1">Discover amazing destinations</Text>
            </View>
            <TextInputField
              placeholder="Search historical place..."
              icon={Search}
            />
            <View style={styles.numberCardContainer}>
              <NumberCard
                icon={MapPinCheck}
                iconTheme="success"
                number={25}
                text="Visited"
              />
              <NumberCard
                icon={MapPinX}
                iconTheme="info"
                number={120}
                text="Not visited"
              />
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.pillContainer}>
              {filter.map((item) => (
                <Pill
                  key={item.id}
                  text={item.name}
                  selected={item.id === selectedFilter}
                  onPress={() => setSelectedFilter(item.id)}
                />
              ))}
            </View>
            <View style={styles.placeTitleContainer}>
              <Text style={styles.placesTitle}>Places</Text>
              <TouchableOpacity onPress={() => navigation.navigate("AddPlace")}>
                <View>
                  <Text>
                    <Plus />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <FlatList
              data={places}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <PlaceCard place={item} onPress={() => handlePress(item._id)} />
              )}
            />
          </View>
        </Layout>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: moderateScale(240),
    paddingTop: moderateScale(68),
    paddingInline: Spacing.md,
    gap: Spacing.md,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
  },
  headerSubtitle: {
    fontSize: 16,
  },
  headerTextContainer: {},
  numberCardContainer: {
    marginTop: Spacing.lg,
    flexDirection: "row",
    gap: Spacing.sm,
  },
  contentContainer: {
    marginTop: Spacing.xl,
    paddingInline: Spacing.md,
  },
  pillContainer: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  placeTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Spacing.md,
  },
  placesTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
});
