import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Place } from "../../utils/types";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { Layout } from "@ui-kitten/components";

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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Layout style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Create New Place</Text>
            </View>
          </ScrollView>
        </Layout>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {},
  headerTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
});
