import { StaticScreenProps } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddressById, fetchPlaceDetail } from "../../redux/actions";
import { RootState } from "../../redux/reducers";
import { Radius } from "../../utils/theme";
import Loader from "../../components/Loader";

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

  if (loading) return <Loader />;

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>{place?.id}</Text>
        <Text>{place?.name}</Text>
        <Text>{place?.description}</Text>
        <Text>{JSON.stringify({ place, address })}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 16 },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: Radius.lg,
    padding: 16,
  },
});
