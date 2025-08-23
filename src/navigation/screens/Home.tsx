import { FlatList, StyleSheet, View } from "react-native";
import { PlaceCard } from "../../components/PlaceCard";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPlaces } from "../../redux/actions";
import { RootState } from "../../redux/reducers";

export const samplePlaces = [
  {
    _id: "1",
    name: "Kota A Famosa",
    description: "Historic Portuguese fortress in Malacca.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/A_Famosa_Malacca.jpg/320px-A_Famosa_Malacca.jpg",
  },
  {
    _id: "2",
    name: "St. Paul's Church",
    description:
      "One of the oldest churches in Malaysia, built by the Portuguese in 1521.",
    isVisited: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/StPaulChurchMalacca.jpg/320px-StPaulChurchMalacca.jpg",
  },
  {
    _id: "3",
    name: "Cheng Hoon Teng Temple",
    description:
      "The oldest functioning Chinese temple in Malaysia, founded in 1645.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cheng_Hoon_Teng_Temple_Malacca.jpg/320px-Cheng_Hoon_Teng_Temple_Malacca.jpg",
  },
  {
    _id: "4",
    name: "A Famosa Gate",
    description: "Main gate of the A Famosa fortress.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/A_Famosa_Gate_Malacca.jpg/320px-A_Famosa_Gate_Malacca.jpg",
  },
  {
    _id: "5",
    name: "Baba & Nyonya Heritage Museum",
    description: "Museum showcasing Peranakan culture.",
    isVisited: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Baba_and_Nyonya_Heritage_Museum.jpg/320px-Baba_and_Nyonya_Heritage_Museum.jpg",
  },
  {
    _id: "6",
    name: "Jonker Street",
    description: "Famous street for night market and antiques.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Jonker_Street_Malacca.jpg/320px-Jonker_Street_Malacca.jpg",
  },
  {
    _id: "7",
    name: "Christ Church Malacca",
    description: "Dutch-built church, iconic red color.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Christ_Church_Malacca.jpg/320px-Christ_Church_Malacca.jpg",
  },
  {
    _id: "8",
    name: "Malacca Sultanate Palace",
    description: "Replica of the original palace of the Malacca Sultanate.",
    isVisited: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Malacca_Sultanate_Palace.jpg/320px-Malacca_Sultanate_Palace.jpg",
  },
  {
    _id: "9",
    name: "Stadthuys",
    description: "Historical Dutch administrative building.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Stadthuys_Malacca.jpg/320px-Stadthuys_Malacca.jpg",
  },
  {
    _id: "10",
    name: "Hang Li Po Well",
    description: "Ancient well named after a Chinese princess.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hang_Li_Po_Well_Malacca.jpg/320px-Hang_Li_Po_Well_Malacca.jpg",
  },
  {
    _id: "11",
    name: "Melaka River Cruise",
    description: "Scenic river cruise through Malacca.",
    isVisited: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Melaka_River_Cruise.jpg/320px-Melaka_River_Cruise.jpg",
  },
  {
    _id: "12",
    name: "Melaka Zoo",
    description: "Large zoo with various animals.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Melaka_Zoo.jpg/320px-Melaka_Zoo.jpg",
  },
  {
    _id: "13",
    name: "Portuguese Settlement",
    description: "Area where Portuguese descendants live.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Portuguese_Settlement_Malacca.jpg/320px-Portuguese_Settlement_Malacca.jpg",
  },
  {
    _id: "14",
    name: "Bukit China",
    description: "Largest Chinese cemetery outside China.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bukit_China_Malacca.jpg/320px-Bukit_China_Malacca.jpg",
  },
  {
    _id: "15",
    name: "Menara Taming Sari",
    description: "Observation tower with panoramic view.",
    isVisited: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Menara_Taming_Sari.jpg/320px-Menara_Taming_Sari.jpg",
  },
  {
    _id: "16",
    name: "Kampung Kling Mosque",
    description: "One of the oldest mosques in Malacca.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Kampung_Kling_Mosque.jpg/320px-Kampung_Kling_Mosque.jpg",
  },
  {
    _id: "17",
    name: "Melaka Wonderland Theme Park",
    description: "Fun water park for families.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Melaka_Wonderland_Theme_Park.jpg/320px-Melaka_Wonderland_Theme_Park.jpg",
  },
  {
    _id: "18",
    name: "Cheng Hoon Teng Temple Annex",
    description: "Smaller shrine connected to main temple.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cheng_Hoon_Teng_Temple_Malacca.jpg/320px-Cheng_Hoon_Teng_Temple_Malacca.jpg",
  },
  {
    _id: "19",
    name: "Melaka Butterfly & Reptile Sanctuary",
    description: "Sanctuary with butterflies and reptiles.",
    isVisited: true,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Melaka_Butterfly_Sanctuary.jpg/320px-Melaka_Butterfly_Sanctuary.jpg",
  },
  {
    _id: "20",
    name: "Pulau Upeh",
    description: "Island known for turtle watching.",
    isVisited: false,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Pulau_Upeh.jpg/320px-Pulau_Upeh.jpg",
  },
];

type Nav = NativeStackNavigationProp<RootStackParamList>;

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

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <PlaceCard place={item} onPress={() => handlePress(item._id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingInline: 16,
  },
});
