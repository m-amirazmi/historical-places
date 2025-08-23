import { StaticScreenProps } from "@react-navigation/native";
import { Text, View } from "react-native";
import { samplePlaces } from "./Home";

type Props = StaticScreenProps<{
  id: string;
}>;

export function PlaceDetail({ route }: Props) {
  const getPlace = samplePlaces.find((place) => place._id === route.params.id);

  return (
    <View>
      <Text>Place detail</Text>
      <Text>{getPlace?._id}</Text>
      <Text>{getPlace?.name}</Text>
      <Text>{getPlace?.description}</Text>
    </View>
  );
}
