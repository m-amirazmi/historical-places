import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Place } from "../utils/types";
import { useTheme } from "@ui-kitten/components";

type PlaceCardProps = {
  place: Place;
  onPress: () => void;
};

export function PlaceCard({ place, onPress }: PlaceCardProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme["color-basic-200"] }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>
        {place.isVisited && <Text style={styles.visited}>✓ Visited</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
    flex: 1,
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  content: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16 },
  description: { color: "#555", marginTop: 4 },
  visited: { marginTop: 6, color: "green", fontWeight: "bold" },
});
