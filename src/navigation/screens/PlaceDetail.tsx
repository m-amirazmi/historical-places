import { StaticScreenProps } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddressById,
  fetchPlaceDetail,
  updatePlaceVisited,
} from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import { FontSize, Radius, Spacing } from "../../utils/theme";
import Loader from "../../components/Loader";
import { Check, Plus } from "lucide-react-native";

type Props = StaticScreenProps<{
  id: string;
}>;

export function PlaceDetail({ route }: Props) {
  const dispatch = useDispatch();
  const place = useSelector((state: RootState) => state.places.selectedPlace);
  const address = useSelector(
    (state: RootState) => state.places.selectedAddress
  );
  const loading = useSelector((state: RootState) => state.places.loading);

  useEffect(() => {
    dispatch(fetchPlaceDetail(route.params.id));
  }, []);

  useEffect(() => {
    if (!place?.address_id) return;
    dispatch(fetchAddressById(place.address_id));
  }, [place?.address_id]);

  const handleVisited = (isVisited: boolean) => {
    if (!place) return;
    dispatch(updatePlaceVisited(place.id, isVisited));
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.placeName}>{place?.name}</Text>
        <Text style={styles.placeDescription}>{place?.description}</Text>
        <TouchableOpacity
          style={styles.badgeContainer}
          onPress={() => handleVisited(!place?.is_visited)}
        >
          {place?.is_visited ? (
            <View style={[styles.badge, styles.badgeVisited]}>
              <Check color="green" size={20} />
              <Text style={[styles.badgeText, styles.badgeVisitedText]}>
                Visited
              </Text>
            </View>
          ) : (
            <View style={[styles.badge, styles.badgeUnvisited]}>
              <Plus color="grey" size={20} />
              <Text style={[styles.badgeText, styles.badgeUnvisitedText]}>
                Not Visited
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.textBase}>{address?.address_one}</Text>
        {address?.address_two && <Text>{address?.address_two}</Text>}
        <Text style={styles.textBase}>{address?.city}</Text>
        <Text style={styles.textBase}>{address?.postcode}</Text>
        <Text style={styles.textBase}>{address?.state}</Text>
        <Text style={styles.textBase}>{address?.country}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16 },
  card: {
    backgroundColor: "#fff",
    borderRadius: Radius.lg,
    padding: Spacing.md,
    alignItems: "flex-start",
    marginBottom: Spacing.md,
  },
  placeName: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: Spacing.sm,
  },
  placeDescription: { fontSize: FontSize.md },
  badgeContainer: { alignSelf: "flex-end" },
  badge: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.xs,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    paddingBlock: Spacing.sm,
    paddingInline: Spacing.md,
    marginTop: Spacing.md,
    borderRadius: Radius.md,
  },
  badgeText: { fontSize: FontSize.md },
  badgeVisited: { backgroundColor: "rgba(3, 252, 98, 0.2)" },
  badgeVisitedText: { color: "green" },
  badgeUnvisited: { backgroundColor: "rgba(205, 207, 206, 0.2)" },
  badgeUnvisitedText: { color: "grey" },
  textBase: {
    fontSize: Spacing.md,
    marginBottom: Spacing.sm,
  },
});
