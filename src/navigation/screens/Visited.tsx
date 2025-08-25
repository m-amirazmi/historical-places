import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "..";
import Loader from "../../components/Loader";
import { PlaceCard } from "../../components/PlaceCard";
import { fetchVisitedPlaces } from "../../redux/actions";
import { RootState } from "../../redux/reducers";

export function Visited() {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.places.visitedList);
  const loading = useSelector((state: RootState) => state.places.loading);

  useEffect(() => {
    dispatch(fetchVisitedPlaces());
  }, []);

  const navigation = useNavigation<Nav>();

  const handlePress = (id: string) => {
    navigation.navigate("PlaceDetail", { id });
  };

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaceCard
            key={item.id}
            place={item}
            onPress={() => handlePress(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingInline: 16,
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },
});
