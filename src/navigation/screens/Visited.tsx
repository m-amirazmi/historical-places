import { StyleSheet, Text, View } from "react-native";

export function Visited() {
  return (
    <View style={styles.container}>
      <Text>Visited screen</Text>
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
