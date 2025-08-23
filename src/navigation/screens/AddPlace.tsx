import { StyleSheet, Text, View } from "react-native";

export function AddPlace() {
  return (
    <View style={styles.container}>
      <Text>AddPlace screen</Text>
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
