import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Place } from "../../utils/types";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

type FormData = Omit<Place, "_id" | "createdAt" | "updatedAt">;

export function AddPlace() {
  const [image, setImage] = useState<string | null>(null);
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        postcode: "",
        state: "",
        country: "",
      },
      coordinate: {
        latitude: 0,
        longitude: 0,
      },
      imageUrl: "",
      category: "",
      rating: 0,
      isVisited: false,
    },
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Create New Place</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {},
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
});
