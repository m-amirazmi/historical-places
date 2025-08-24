import { StaticScreenProps } from "@react-navigation/native";
import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaceDetail } from "../../redux/actions";
import { RootState } from "../../redux/reducers";

type Props = StaticScreenProps<{
  id: string;
}>;

export function PlaceDetail({ route }: Props) {
  const dispatch = useDispatch();
  const place = useSelector((state: RootState) => state.places.selectedPlace);
  const loading = useSelector((state: RootState) => state.places.loading);

  useEffect(() => {
    dispatch(fetchPlaceDetail(route.params.id));
  }, []);

  return (
    <View>
      <Text>Place detail</Text>
      <Text>{place?._id}</Text>
      <Text>{place?.name}</Text>
      <Text>{place?.description}</Text>
    </View>
  );
}
