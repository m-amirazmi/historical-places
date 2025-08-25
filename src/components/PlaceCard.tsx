import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Place } from "../utils/types";
import { Check, Plus } from "lucide-react-native";
import { useDispatch } from "react-redux";
import { updatePlaceVisited } from "../redux/actions";

type PlaceCardProps = {
  place: Place;
  onPress: () => void;
};

export function PlaceCard({ place, onPress }: PlaceCardProps) {
  const dispatch = useDispatch();

  const handleVisited = (isVisited: boolean) => {
    dispatch(updatePlaceVisited(place.id, isVisited));
  };

  return (
    <TouchableOpacity style={[styles.card]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.description}>{place.description}</Text>
      </View>
      {place.is_visited ? (
        <TouchableWithoutFeedback onPress={() => handleVisited(false)}>
          <View style={styles.visited}>
            <Check color="green" />
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => handleVisited(true)}>
          <View style={styles.unvisited}>
            <Plus color="green" />
          </View>
        </TouchableWithoutFeedback>
      )}
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
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 8,
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  content: { flex: 1 },
  name: { fontWeight: "bold", fontSize: 16 },
  description: { color: "#555", marginTop: 4 },
  unvisited: {
    backgroundColor: "rgba(3, 252, 98, 0.2)",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
  },
  visited: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    borderRadius: 8,
  },
});
