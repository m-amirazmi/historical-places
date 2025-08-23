import { StyleSheet, Text, View } from "react-native";

export function Map() {
  return (
    <View style={styles.container}>
      <Text>Map screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
