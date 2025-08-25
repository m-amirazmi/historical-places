import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "..";
import Loader from "../../components/Loader";
import { PlaceCard } from "../../components/PlaceCard";
import { fetchPlaces } from "../../redux/actions";
import { RootState } from "../../redux/reducers";

export function Home() {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.places.list);
  const loading = useSelector((state: RootState) => state.places.loading);

  useEffect(() => {
    dispatch(fetchPlaces());
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
  container: { paddingInline: 16 },
});
